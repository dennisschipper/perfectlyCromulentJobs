import type { IJob, TJobType, TPositionType } from "types";

export const filterPosition = (position: string) => (job: IJob) => (
  job.position.toLowerCase().includes(position.toLowerCase())
)

export const filterPositionType = (positionTypes: TPositionType[]) => (job: IJob) => (
  positionTypes.length === 0 ? true : positionTypes.includes(job.positionType)
)

export const filterJobType = (jobTypes: TJobType[]) => (job: IJob) => (
  jobTypes.length === 0 ? true : job.type.some(jt => jobTypes.includes(jt))
)
