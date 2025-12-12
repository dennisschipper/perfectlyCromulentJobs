import { produce } from "immer"
import type { IAppState, IJob, TJobType, TPositionType } from "types"

export type TSaveJobAction = { type: 'saveJob', payload: { job: IJob }}
export const saveJobAction = (state: IAppState, action: TSaveJobAction): IAppState => {
  const exists = state.options.saved.includes(action.payload.job.id)
  const saved = exists ? 
    state.options.saved.filter(id => action.payload.job.id !== id) :
    [...state.options.saved, action.payload.job.id]
  const options = { ...state.options, saved }
  return ({ ...state, options })
}

export type TUpdatePositionFilterAction = { type: 'updatePositionFilter', payload: { position: string }}
export const updatePositionFilterAction = produce((state: IAppState, action: TUpdatePositionFilterAction): IAppState => {
  state.options.filters.position = action.payload.position
  return state
})

export type TUpdatePositionTypeAction = { type: 'updatePositionType', payload: { positionType: TPositionType }}
export const updatePositionTypeAction = produce((state: IAppState, action: TUpdatePositionTypeAction) => {
  const positionTypes: TPositionType[] = 
    state.options.filters.positionTypes.includes(action.payload.positionType) ?
      state.options.filters.positionTypes.filter(pt => pt !== action.payload.positionType) :
      [...state.options.filters.positionTypes, action.payload.positionType]
  state.options.filters.positionTypes = positionTypes
  return state
})

export type TUpdateJobTypeAction = { type: 'updateJobType', payload: { jobType: TJobType }}
export const updateJobTypeAction = produce((state: IAppState, action: TUpdateJobTypeAction): IAppState => {
  const currentJobTypes = state.options.filters.jobTypes
  const jobTypes = currentJobTypes.includes(action.payload.jobType) ?
    currentJobTypes.filter(jt => jt !== action.payload.jobType) :
    [...currentJobTypes, action.payload.jobType]
  state.options.filters.jobTypes = jobTypes
  return state
})

export type TUpdateFiltersAction = { type: 'updateFilters', payload: { filters: IAppState['options']['filters']} }
export const updateFiltersAction = produce((state: IAppState, action: TUpdateFiltersAction) => {
  state.options.filters = action.payload.filters
  return state
})
