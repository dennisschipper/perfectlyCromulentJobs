import fs from "node:fs/promises"
import path from "node:path"
import type { IHnJobs, IJob } from "../src/types"
import { getJobData } from "./getJobData"

const main = async () => {
  // Get the full file path.
  const filePath = process.argv[2]
  if (!filePath) { throw new Error("Missing filename argument") }
  const fullPath = path.resolve(process.cwd(), filePath)
  // Get the jobs
  const hnJobs: IHnJobs = (await import(fullPath)).hnJobs

  const justAFewJobs = hnJobs.posts.splice(0, 1)
  
  // Now parse each job and get the data back.
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

main().catch(err => {
  console.error(err)
  process.exit(1)
})
