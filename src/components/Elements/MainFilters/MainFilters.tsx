import { FilterCount } from "./FilterCount/FilterCount"

export const MainFilters = () => {
  return (
    <div className="mainFilters">
      <div>
        <FilterCount current={102} total={307} />
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
