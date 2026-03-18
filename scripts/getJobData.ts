// Chatgpt wrote this.
import "dotenv/config"
import OpenAI from "openai"
import type { IHnJobs, IHnJob, IJob } from "../src/types"
import { parsingInstructions } from "./parsingInstructions"

const client = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY })

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

export const getJobData = async (posts: IHnJobs['posts']): Promise<IJob[]> => {
  const out: IJob[] = []
  for (const post of posts) {
    const { id, by, text } = post
    const payload = { id, by, text } satisfies IHnJob

    const res = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages: [
        { role: "system", content: parsingInstructions },
        { role: "user", content: JSON.stringify(payload) }
      ]
    })
    const content = res.choices[0]?.message?.content ?? "[]"
    const parsed = JSON.parse(content) as IJob[]
    out.push(...normalizeAndFillIds(parsed))
  }
  
  return out
}
