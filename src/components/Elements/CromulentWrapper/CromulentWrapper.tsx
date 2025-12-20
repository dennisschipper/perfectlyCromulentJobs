import { App } from "App"
import { savedInBrowser } from "helpers"
import { useEffect, useState } from "react"
import { initialState } from "store/cromulentReducer"
import type { IAppState } from "types"

export const CromulentWrapper = () => {
  // Get any saved state from localforage before rendering the app.
  const [ state, updateState ] = useState<null | IAppState>(null)
  
  useEffect(() => {
    savedInBrowser().then(savedState => updateState(savedState || initialState))
  }, [])

  return !state ? null : <App initialState={state} />
}
