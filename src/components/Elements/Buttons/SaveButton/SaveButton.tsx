import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext } from "react"
import type { IJob } from "types"

interface ISaveButtonProps {
  job: IJob
}

export const SaveButton = (props: ISaveButtonProps) => {
  const { appState, dispatch } = useContext(CromulentContext)
  const { job } = props
  const saved = appState.options.saved.includes(job.id)
  

  const onClick = () => dispatch({ type: 'saveJob', payload: { job } })

  return (
    <button className={`saveButton ${saved ? 'active' : ''}`} onClick={onClick}>
      <span></span>
    </button>
  )
}
