import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext } from "react"

interface ILocationDropdownFooterProps {
  onClose: () => void
}

export const LocationDropdownFooter = (props: ILocationDropdownFooterProps) => {
  const { appState, dispatch } = useContext(CromulentContext)
  const onClickClear = () => {
    dispatch({ type: 'updateLocationFilters', payload: { locations: [] }})
  }

  const onClickClose = () => props.onClose()

  return (
    <div className="dropdownFooter">
      <button className="buttonMajor" onClick={onClickClose}>Apply</button>
      <button 
        className="buttonMinor" 
        onClick={onClickClear}
        disabled={!appState.options.filters.locations.length}
      >
        Clear filters
      </button>
    </div>
  )
}
