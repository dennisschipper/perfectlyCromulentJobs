import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { positionTypeToAbbr } from "helpers"
import { useContext, type Ref } from "react"

interface IFilterByPositionControlProps {
  ref: Ref<HTMLButtonElement>
  onClick: () => null
}

export const FilterByPositionControl = (props: IFilterByPositionControlProps) => {
  const { appState } = useContext(CromulentContext)
  const filters = appState.options.filters.positionTypes
  const textFilter = appState.options.filters.position

  const filterItems = filters.slice(0, 2).map(
    filter => (
      <li key={filter}>
        {positionTypeToAbbr(filter)}
      </li>
    )
  )

  const filterContent = (
    <ul className="controlList">
      {filterItems}
      {filters.length > 2 && <li>+{filters.length - 2}</li>}
      {!!textFilter.length && <li><span>{textFilter}</span></li>}
    </ul>
  )
  
  return (
    <div className="controlListWrapper">
      <button onClick={props.onClick} ref={props.ref} className="minor">
        {!filters.length && "Filter by position"}
        {!!filters.length && filterContent}
      </button>
    </div>
  )
}
