import { jobs } from "data/testData"
import type { IAppState, TActionTypes } from "types"
import { saveJobAction, updatePositionFilterAction } from "./cromulentActions"

export const initialState: IAppState = {
  jobs,
  options: {
    saved: [],
    filters: {
      position: ""
    }
  }
}

export const cromulentReducer = (state: IAppState, action: TActionTypes) => {
  switch(action.type) {
    case 'saveJob': return saveJobAction(state, action)
    case 'updatePositionFilter': return updatePositionFilterAction(state, action)
    default: return state
  }
}
