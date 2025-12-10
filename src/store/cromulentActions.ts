import type { IAppState, IJob } from "types"

export type TSaveJobAction = { type: 'saveJob', payload: { job: IJob }}
export const saveJobAction = (state: IAppState, action: TSaveJobAction): IAppState => {
  const exists = state.options.saved.includes(action.payload.job.id)
  const saved = exists ? 
    state.options.saved.filter(id => action.payload.job.id !== id) :
    [...state.options.saved, action.payload.job.id]
  const options = { ...state.options, saved }
  return ({ ...state, options })
}
