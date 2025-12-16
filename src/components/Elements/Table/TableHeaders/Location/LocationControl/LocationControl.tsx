import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext, type Ref } from "react"

interface ILocationControlProps {
  onClick: () => void
  ref: Ref<HTMLButtonElement>
}

export const LocationControl = (props: ILocationControlProps) => {
  const { appState } = useContext(CromulentContext)
  const filters = appState.options.filters.locations
  const textFilter = appState.options.filters.locationText

  const filterContent = (
    <ul className="controlList">
      {!!filters.length &&<li>({filters.length})</li>}
      {!!textFilter.length && <li><span>{textFilter}</span></li>}
    </ul>
  )
  
  return (
    <div className="controlListWrapper">
      <button 
        onClick={props.onClick}
        ref={props.ref}
        className="minor"
      >
        {!filters.length && !textFilter.length && "All"}
        {(!!filters.length || !!textFilter.length) && filterContent}
      </button>
    </div>
  )
}
