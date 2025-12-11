import type { TSaveJobAction, TUpdatePositionFilterAction } from "store/cromulentActions";
import type { IJob } from "./";

export interface IUserOptions {
  saved: string[]
  filters: {
    position: string
  }
}

export interface IAppState {
  jobs: IJob[]
  options: IUserOptions
}

export type TActionTypes = TUpdateJobsAction | TSaveJobAction | TUpdatePositionFilterAction

export type TUpdateJobsAction = { type: 'updateJobs', payload: { jobs: IJob[]}}

