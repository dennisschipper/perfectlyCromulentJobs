import type { TSaveJobAction, TUpdateFiltersAction, TUpdateJobTypeAction, TUpdateLocationFiltersAction, TUpdateLocationFilterTextAction, TUpdatePositionFilterAction, TUpdatePositionTypeAction } from "store/cromulentActions";
import type { IJob, ILocation, TJobType, TPositionType } from "./";

export interface IUserOptions {
  saved: string[]
  filters: {
    position: string
    positionTypes: TPositionType[]
    jobTypes: TJobType[]
    locations: ILocation[]
    locationText: string
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
  TUpdateFiltersAction |
  TUpdateLocationFiltersAction |
  TUpdateLocationFilterTextAction

export type TUpdateJobsAction = { type: 'updateJobs', payload: { jobs: IJob[]}}

