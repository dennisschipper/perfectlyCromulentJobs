import type { IJob } from "types";

export const filterPosition = (position: string) => (job: IJob) => (
  job.position.toLowerCase().includes(position.toLowerCase())
)
