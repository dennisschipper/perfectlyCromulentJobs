// Chatgpt wrote this.
import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import type { IHnJobs, IJob } from "../src/types"
import { getJobData } from "./getJobData"

const pad2 = (n: number) => String(n).padStart(2, "0")

const resolveInput = (m: any): IHnJobs => {
  const v = m.default ?? m.jobData ?? m.hnJobs ?? m.jobs ?? m.data
  if (!v) throw new Error("Input module must export IHnJobs (default/jobData/hnJobs/jobs/data)")
  return v as IHnJobs
}

const main = async () => {
  const inputArg = process.argv[2]
  if (!inputArg) throw new Error("Missing filename argument")

  const absInput = path.isAbsolute(inputArg) ? inputArg : path.resolve(process.cwd(), inputArg)
  const mod = await import(pathToFileURL(absInput).href)
  const hnJobs = resolveInput(mod)

  const jobs: IJob[] = await getJobData(hnJobs)
  const outDir = path.resolve(process.cwd(), "src/data")
  await fs.mkdir(outDir, { recursive: true })

  const outFile = path.join(outDir, `jobData.ts`)
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
