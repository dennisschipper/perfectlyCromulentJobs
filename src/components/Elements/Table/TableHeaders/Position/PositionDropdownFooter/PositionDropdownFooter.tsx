import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { produce } from "immer"
import { useContext } from "react"

interface IPositionDropdownFooterProps {
  onClose: () => void
}

export const PositionDropdownFooter = (props: IPositionDropdownFooterProps) => {
  const { appState, dispatch } = useContext(CromulentContext)
  const onClickClear = () => {
    const filters = produce(appState.options.filters, draft => {
      draft.positionTypes = []
    })
    dispatch({ type: 'updateFilters', payload: { filters }})
  }

  const onClickApply = () => props.onClose()

  return (
    <div className="dropdownFooter">
      <button className="buttonMajor" onClick={onClickApply}>Apply</button>
      <button 
        className="buttonMinor" 
        onClick={onClickClear} 
        disabled={!appState.options.filters.positionTypes.length}
      >
        Clear all
      </button>
    </div>
  )
}
