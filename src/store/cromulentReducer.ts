import type { IAppState, TActionTypes } from "types"
import { saveJobAction, updateFiltersAction, updateHnJobsAction, updateJobTypeAction, updateLocationFiltersAction, updateLocationFilterTextAction, updatePositionFilterAction, updatePositionTypeAction } from "./cromulentActions"
import { jobs } from "data/jobData_2025_12"

export const initialState: IAppState = {
  jobs,
  hnJobs: [],
  options: {
    saved: [],
    filters: {
      position: "",
      positionTypes: [],
      jobTypes: [],
      locations: [],
      locationText: ''
    }
  }
}

export const cromulentReducer = (state: IAppState, action: TActionTypes) => {
  switch(action.type) {
    case 'saveJob': return saveJobAction(state, action)
    case 'updatePositionFilter': return updatePositionFilterAction(state, action)
    case 'updatePositionType': return updatePositionTypeAction(state, action)
    case 'updateJobType': return updateJobTypeAction(state, action)
    case 'updateLocationFilters': return updateLocationFiltersAction(state, action)
    case 'updateLocationFilterText': return updateLocationFilterTextAction(state, action)
    case 'updateFilters': return updateFiltersAction(state, action)
    case 'updateJobTexts': return updateHnJobsAction(state, action)
    default: return state
  }
}
