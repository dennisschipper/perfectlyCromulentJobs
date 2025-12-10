import { jobs } from "data/testData"
import type { IAppState, TActionTypes } from "types"
import { saveJobAction } from "./cromulentActions"

export const initialState: IAppState = {
  jobs,
  options: {
    saved: []
  }
}

export const cromulentReducer = (state: IAppState, action: TActionTypes) => {
  switch(action.type) {
    case 'saveJob': return saveJobAction(state, action)
    default: return state
  }
}
