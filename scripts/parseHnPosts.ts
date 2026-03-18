import fs from "node:fs/promises"
import path from "node:path"
import type { IHnJobs, IJob } from "../src/types"
import { getJobData } from "./getJobData"

const parseHnPosts = async () => {
  const filePath = process.argv[2]
  if (!filePath) { throw new Error("Missing filename argument") }
  const fullPath = path.resolve(process.cwd(), filePath)
  const hnJobs: IHnJobs = (await import(fullPath)).hnJobs

  const justAFewJobs = hnJobs.posts.splice(0, 1)
  const jobs: IJob[] = await getJobData(justAFewJobs)
  
  const savePath = path.resolve(process.cwd(), "src/data")
  await fs.mkdir(savePath, { recursive: true })
  const outFile = path.join(savePath, `jobData.ts`)

  const content =
    `import type { IJob } from "types"\n\n` +
    `export const jobs: IJob[] = ${JSON.stringify(jobs, null, 2)}\n`

  await fs.writeFile(outFile, content, "utf8")
  process.stdout.write(outFile + "\n")
}

parseHnPosts().catch(
  err => {
    console.error(err)
    process.exit(1)
  }
)
