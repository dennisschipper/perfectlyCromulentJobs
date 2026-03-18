import "dotenv/config"
import OpenAI from "openai"
import type { IHnJobs, IHnJob, IJob } from "../src/types"
import { parsingInstructions } from "./parsingInstructions"

const client = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY })

export const getJobData = async (posts: IHnJobs['posts']): Promise<IJob[]> => {
  const jobs: IJob[] = []
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
    const parsedJobs = JSON.parse(content) as IJob[]
    jobs.push(...parsedJobs)
  }
  return jobs
}
