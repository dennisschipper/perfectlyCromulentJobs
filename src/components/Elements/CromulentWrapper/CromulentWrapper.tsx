import { App } from "App"
import { savedInBrowser } from "helpers"
import { useEffect, useState } from "react"
import { initialState } from "store/cromulentReducer"
import type { IAppState } from "types"
import { init } from '@plausible-analytics/tracker'

export const CromulentWrapper = () => {
  // Get any saved state from localforage before rendering the app.
  const [ state, updateState ] = useState<null | IAppState>(null)
  
  useEffect(() => {
    const devMode = import.meta.env.MODE === 'development'
    !devMode && init({ domain: 'cromulentjobs.com' })
    savedInBrowser().then(savedState => updateState(savedState ? {...savedState, jobs: initialState.jobs} : initialState))
  }, [])

  return !state ? null : <App initialState={state} />
}
