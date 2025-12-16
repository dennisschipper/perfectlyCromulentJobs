import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { jobTypeToAbbr } from "helpers"
import { useContext, type Ref } from "react"
import { jobTypes } from "types"

interface ITypeControlProps {
  onClick: () => void
  ref: Ref<HTMLButtonElement>
}

export const TypeControl = (props: ITypeControlProps) => {
  const { appState } = useContext(CromulentContext)
  const types = appState.options.filters.jobTypes
  const buttonText = types.length === 0 || types.length === jobTypes.length ?
    "All" :
    types.map(type => <abbr key={type}>{jobTypeToAbbr(type)}</abbr>)
  return (
    <button ref={props.ref} onClick={props.onClick} className="minor">
      {buttonText}
    </button>
  )
}
