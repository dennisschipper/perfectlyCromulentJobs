import { produce } from "immer"
import type { IAppState, IJob, TPositionType } from "types"

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
