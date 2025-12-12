import { useContext } from "react"
import { CromulentContext } from "../CromulentContext/CromulentContext"
import { FilterCount } from "./FilterCount/FilterCount"
import { filterJobs } from "helpers"
import { initialState } from "store/cromulentReducer"

export const MainFilters = () => {
  const { appState, dispatch } = useContext(CromulentContext)
  const jobs = filterJobs(appState.jobs, appState.options.filters)

  const onClickReset = () => {
    const filters = initialState.options.filters
    dispatch({ type: 'updateFilters', payload: { filters }})
  }

  return (
    <div className="mainFilters">
      <div>
        <FilterCount current={jobs.length} total={appState.jobs.length} />
      </div>
      <div className="spacer">
        <button className="minor" onClick={onClickReset}>Reset filters</button>
        <button className="minor">Show extra filters</button>
      </div>
      <div className="controls">
        <button className="minor">Export view</button>
        <button className="minor">Data settings</button>
      </div>
    </div>
  )
}
