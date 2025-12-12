import type { TSaveJobAction, TUpdateFiltersAction, TUpdateJobTypeAction, TUpdatePositionFilterAction, TUpdatePositionTypeAction } from "store/cromulentActions";
import type { IJob, TJobType, TPositionType } from "./";

export interface IUserOptions {
  saved: string[]
  filters: {
    position: string
    positionTypes: TPositionType[]
    jobTypes: TJobType[]
  }
}

export interface IAppState {
  jobs: IJob[]
  options: IUserOptions
}

export type TActionTypes = 
  TUpdateJobsAction | 
  TSaveJobAction | 
  TUpdatePositionFilterAction |
  TUpdatePositionTypeAction |
  TUpdateJobTypeAction |
  TUpdateFiltersAction

export type TUpdateJobsAction = { type: 'updateJobs', payload: { jobs: IJob[]}}

