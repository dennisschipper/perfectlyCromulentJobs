import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext, type ChangeEventHandler } from "react"

export const PositionSearchForm = () => {
  const { appState, dispatch } = useContext(CromulentContext)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const position = e.target.value
    dispatch({ type: 'updatePositionFilter', payload: { position } })
  }

  return (
    <form className="searchForm">
      <input 
        type="text" 
        placeholder="Search by phrase" 
        onChange={onChange}
        value={appState.options.filters.position}
      />
      <button type="submit">Search</button>
    </form>
  )
}
