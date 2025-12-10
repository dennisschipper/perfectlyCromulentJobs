import type { TSaveJobAction } from "store/cromulentActions";
import type { IJob } from "./";

export interface IUserOptions {
  saved: string[]
}

export interface IAppState {
  jobs: IJob[]
  options: IUserOptions
}

export type TActionTypes = TUpdateJobsAction | TSaveJobAction

export type TUpdateJobsAction = { type: 'updateJobs', payload: { jobs: IJob[]}}

