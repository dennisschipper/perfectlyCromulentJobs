import type { IJob, TPositionType } from "types";

export const filterPosition = (position: string) => (job: IJob) => (
  job.position.toLowerCase().includes(position.toLowerCase())
)

export const filterPositionType = (positionTypes: TPositionType[]) => (job: IJob) => (
  positionTypes.length === 0 ? true : positionTypes.includes(job.positionType)
)
