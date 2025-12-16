import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext } from "react"
import { initialState } from "store/cromulentReducer"

interface ITypeDropdownFooterProps {
  onClose: () => void
}

export const TypeDropdownFooter = (props: ITypeDropdownFooterProps) => {
  const { appState, dispatch } = useContext(CromulentContext)
  const onClickApply = () => props.onClose()

  const onClickClear = () => {
    const filters = initialState.options.filters
    dispatch({ type: 'updateFilters', payload: { filters }})
  }

  return (
    <div className="dropdownFooter">
      <button className="buttonMajor" onClick={onClickApply}>Apply</button>
      <button 
        className="buttonMinor" 
        onClick={onClickClear}
        disabled={!appState.options.filters.jobTypes.length}
      >
        Clear
      </button>
    </div>
  )
}
