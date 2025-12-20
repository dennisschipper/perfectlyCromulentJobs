import type { TSaveJobAction, TUpdateFiltersAction, TUpdateHnJobsAction, TUpdateJobTypeAction, TUpdateLocationFiltersAction, TUpdateLocationFilterTextAction, TUpdatePositionFilterAction, TUpdatePositionTypeAction } from "store/cromulentActions";
import type { IHnJob, IJob, ILocation, TJobType, TPositionType } from "./";

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
  hnJobs: IHnJob[]
  options: IUserOptions
}

export type TActionTypes = 
  TSaveJobAction | 
  TUpdatePositionFilterAction |
  TUpdatePositionTypeAction |
  TUpdateJobTypeAction |
  TUpdateFiltersAction |
  TUpdateLocationFiltersAction |
  TUpdateLocationFilterTextAction |
  TUpdateHnJobsAction

