import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext, type ChangeEventHandler, type FormEventHandler } from "react"

export const PositionSearchForm = () => {
  const { appState, dispatch } = useContext(CromulentContext)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const position = e.target.value
    dispatch({ type: 'updatePositionFilter', payload: { position } })
  }

  const onClickClear = () => {
    dispatch({ type: 'updatePositionFilter', payload: { position: '' } })
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Search by phrase" 
        onChange={onChange}
        value={appState.options.filters.position}
      />
      <button 
        onClick={onClickClear}
        className="buttonMinor"
        disabled={!appState.options.filters.position.length} 
        type="button"
      >
        Clear
      </button>
    </form>
  )
}
