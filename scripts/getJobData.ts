import "dotenv/config"
import type { IHnJobs, IJob } from "../src/types"
import { parsingInstructions } from "./parsingInstructions"
import OpenAI from "openai"

const client = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY })

const extractJson = (s: string) => {
  const firstBrace = s.indexOf("{")
  const firstBracket = s.indexOf("[")
  const start =
    firstBracket !== -1 && (firstBrace === -1 || firstBracket < firstBrace) ? firstBracket : firstBrace

  if (start === -1) throw new Error("No JSON found in model output")

  const json = s.slice(start).trim()

  try {
    return JSON.parse(json)
  } catch {
    // try to strip ```json fences if present
    const unfenced = json.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim()
    return JSON.parse(unfenced)
  }
}

export const getJobData = async (data: IHnJobs): Promise<IJob[]> => {
  const src = JSON.stringify(data)
  const chunks = chunkJsonString(src, 60_000)

  const jobs: IJob[] = []
  for (let i = 0; i < chunks.length; i++) {
    const res = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages: [
        { role: "system", content: parsingInstructions },
        {
          role: "user",
          content:
            "You will be given a chunk of a larger JSON document (as text). " +
            "Extract any job records you can fully parse from THIS CHUNK ONLY. " +
            "Return ONLY valid JSON for an IJob[] array. No prose, no markdown, no code fences.\n\n" +
            `chunkIndex: ${i}\nchunkCount: ${chunks.length}\n\n` +
            chunks[i]
        }
      ]
    })

    const content = res.choices[0]?.message?.content ?? ""
    const parsed = extractJson(content)

    if (Array.isArray(parsed)) {
      jobs.push(...(parsed as IJob[]))
      continue
    }
    if (parsed && Array.isArray((parsed as any).jobs)) {
      jobs.push(...((parsed as any).jobs as IJob[]))
      continue
    }

    throw new Error(`Model output JSON was not IJob[] (chunk ${i + 1}/${chunks.length})`)
  }

  return dedupeJobs(jobs)
}

const chunkJsonString = (s: string, maxLen: number): string[] => {
  if (s.length <= maxLen) return [s]

  const chunks: string[] = []
  let start = 0

  while (start < s.length) {
    let end = Math.min(start + maxLen, s.length)

    // Try to end on a safe boundary to reduce mid-token/object splits
    const window = s.slice(start, end)
    const lastBoundary = Math.max(
      window.lastIndexOf("\n"),
      window.lastIndexOf("},"),
      window.lastIndexOf("],"),
      window.lastIndexOf("},\n"),
      window.lastIndexOf("]\n"),
      window.lastIndexOf(",")
    )

    if (lastBoundary > 1000) end = start + lastBoundary + 1

    chunks.push(s.slice(start, end))
    start = end
  }

  return chunks
}

const dedupeJobs = (jobs: IJob[]): IJob[] => {
  const seen = new Set<string>()
  const out: IJob[] = []

  for (const j of jobs) {
    const key =
      (j as any).id ??
      (j as any).jobId ??
      (j as any).url ??
      `${(j as any).title ?? ""}|${(j as any).company ?? ""}|${(j as any).location ?? ""}`

    const k = String(key)
    if (seen.has(k)) continue
    seen.add(k)
    out.push(j)
  }

  return out
}
