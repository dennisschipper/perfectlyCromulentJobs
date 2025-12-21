// Chatgpt wrote this.
import "dotenv/config"
import OpenAI from "openai"
import type { IHnJobs, IHnJob, IJob } from "../src/types"
import { parsingInstructions } from "./parsingInstructions"

const client = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY })

const extractJsonArray = (s: string) => {
  const start = s.indexOf("[")
  if (start === -1) throw new Error("No JSON array found in model output")
  const raw = s
    .slice(start)
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim()
  return JSON.parse(raw)
}

const toKebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")

const normalizeAndFillIds = (jobs: IJob[]): IJob[] =>
  jobs.map(j => {
    const sourceId = String((j as any).sourceId ?? "")
    const position = String((j as any).position ?? "")
    return {
      ...j,
      sourceId,
      id: j.id && j.id.length ? j.id : `${sourceId}-${toKebab(position)}`
    }
  })

export const getJobData = async (data: IHnJobs): Promise<IJob[]> => {
  const out: IJob[] = []

  for (const post of data.posts) {
    const payload = {
      id: post.id,
      by: post.by,
      text: post.text
    } satisfies IHnJob

    const res = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages: [
        { role: "system", content: parsingInstructions },
        { role: "user", content: JSON.stringify(payload) }
      ]
    })

    const content = res.choices[0]?.message?.content ?? "[]"
    const parsed = extractJsonArray(content) as IJob[]
    out.push(...normalizeAndFillIds(parsed))
  }

  return dedupeJobs(out)
}

const dedupeJobs = (jobs: IJob[]): IJob[] => {
  const seen = new Set<string>()
  const out: IJob[] = []

  for (const j of jobs) {
    const k = String(j.id || `${j.sourceId}|${j.company}|${j.position}`)
    if (seen.has(k)) continue
    seen.add(k)
    out.push(j)
  }

  return out
}
