import { jobs } from "data/testData"
import type { IAppState, TActionTypes } from "types"
import { saveJobAction, updateJobTypeAction, updatePositionFilterAction, updatePositionTypeAction } from "./cromulentActions"

export const initialState: IAppState = {
  jobs,
  options: {
    saved: [],
    filters: {
      position: "",
      positionTypes: [],
      jobTypes: []
    }
  }
}

export const cromulentReducer = (state: IAppState, action: TActionTypes) => {
  switch(action.type) {
    case 'saveJob': return saveJobAction(state, action)
    case 'updatePositionFilter': return updatePositionFilterAction(state, action)
    case 'updatePositionType': return updatePositionTypeAction(state, action)
    case 'updateJobType': return updateJobTypeAction(state, action)
    default: return state
  }
}
