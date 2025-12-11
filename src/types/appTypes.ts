import type { TSaveJobAction, TUpdatePositionFilterAction, TUpdatePositionTypeAction } from "store/cromulentActions";
import type { IJob, TPositionType } from "./";

export interface IUserOptions {
  saved: string[]
  filters: {
    position: string
    positionTypes: TPositionType[]
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
  TUpdatePositionTypeAction

export type TUpdateJobsAction = { type: 'updateJobs', payload: { jobs: IJob[]}}

