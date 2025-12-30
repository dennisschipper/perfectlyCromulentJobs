import { useContext } from "react"
import { CromulentContext } from "../CromulentContext/CromulentContext"
import { FilterCount } from "./FilterCount/FilterCount"
import { filterJobs, isFiltering } from "helpers"
import { initialState } from "store/cromulentReducer"

export const MainFilters = () => {
  const { appState, dispatch } = useContext(CromulentContext)
  const jobs = filterJobs(appState.jobs, appState.options.filters)

  const onClickReset = () => {
    const filters = initialState.options.filters
    dispatch({ type: 'updateFilters', payload: { filters }})
  }

  const disableReset = isFiltering(appState.options.filters)

  return (
    <div className="mainFilters">
      <div>
        <FilterCount current={jobs.length} total={appState.jobs.length} />
      </div>
      <div className="spacer">
        <button disabled={disableReset} className="minor" onClick={onClickReset}>
          Reset filters
        </button>
      </div>
    </div>
  )
}
