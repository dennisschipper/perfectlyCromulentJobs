import { jobs } from "data/jobData_12_2025"
import type { IAppState, TActionTypes } from "types"
import { saveJobAction, updateFiltersAction, updateJobTypeAction, updateLocationFiltersAction, updateLocationFilterTextAction, updatePositionFilterAction, updatePositionTypeAction } from "./cromulentActions"

export const initialState: IAppState = {
  jobs,
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
    default: return state
  }
}
