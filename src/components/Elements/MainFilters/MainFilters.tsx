import { useContext } from "react"
import { CromulentContext } from "../CromulentContext/CromulentContext"
import { FilterCount } from "./FilterCount/FilterCount"
import { filterJobs } from "helpers"

export const MainFilters = () => {
  const { appState } = useContext(CromulentContext)
  const jobs = filterJobs(appState.jobs, appState.options.filters)

  return (
    <div className="mainFilters">
      <div>
        <FilterCount current={jobs.length} total={appState.jobs.length} />
      </div>
      <div className="spacer">
        <button className="minor">Reset filters</button>
        <button className="minor">Show extra filters</button>
      </div>
      <div className="controls">
        <button className="minor">Export view</button>
        <button className="minor">Data settings</button>
      </div>
    </div>
  )
}
