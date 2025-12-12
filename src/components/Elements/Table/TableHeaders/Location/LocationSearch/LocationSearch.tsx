import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext, type ChangeEventHandler, type FormEventHandler } from "react"

export const LocationSearch = () => {
  const { appState, dispatch } = useContext(CromulentContext)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ 
      type: 'updateLocationFilterText', 
      payload: { locationtext: e.target.value}
    })
  }

  const onClickClear = () => {
    dispatch({ type: 'updateLocationFilterText', payload: { locationtext: ""}})
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Filter locations" 
        value={appState.options.filters.locationText} 
        onChange={onChange}
      />
      <button 
        disabled={appState.options.filters.locationText.length === 0}
        className="buttonMinor"
        onClick={onClickClear}
        type="button"
      >
        Clear
      </button>
    </form>
  )
}
