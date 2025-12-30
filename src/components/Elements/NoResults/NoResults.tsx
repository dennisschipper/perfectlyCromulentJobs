import { useContext } from "react"
import { initialState } from "store/cromulentReducer"
import { CromulentContext } from "../CromulentContext/CromulentContext"

interface INoResultsProps {
  display: boolean
}

export const NoResults = (props: INoResultsProps) => {
  const { dispatch } = useContext(CromulentContext)
  
  const onClick = () => {
    const filters = initialState.options.filters
    dispatch({ type: 'updateFilters', payload: { filters }})
  }

  return !props.display ? null : (
    <tbody className="tableRow">
      <tr>
        <td colSpan={6}>
          <div className="noResults">
            <p>You've dug too deep and found nothing.</p>
            <p><button onClick={onClick} className="minor">Reset filters.</button></p>
          </div>
        </td>
      </tr>
    </tbody>
  )
}
