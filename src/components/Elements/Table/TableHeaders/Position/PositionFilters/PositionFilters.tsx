import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"
import { positionTypeToText } from "helpers"
import { useContext } from "react"
import { positionTypes, type TPositionType } from "types"

export const PositionFilters = () => {
  const { appState, dispatch } = useContext(CromulentContext)

  const onClick = (name: string) => {
    const positionType = name as TPositionType
    dispatch({ type: 'updatePositionType', payload: { positionType }})
  }

  const filters = positionTypes.map(
    positionType => (
      <li key={positionType}>
        <Checkbox 
          name={positionType} 
          text={positionTypeToText(positionType)} 
          onClick={onClick} 
          checked={appState.options.filters.positionTypes.includes(positionType)}
        />
      </li>
    )
  )

  return (
    <div>
      <div className="grey">Filter by type</div>
      <ul className="checkboxList">
        {filters}
      </ul>
    </div>
  )
}
