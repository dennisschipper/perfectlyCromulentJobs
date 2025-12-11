import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"
import { jobTypeToText } from "helpers"
import { useContext } from "react"
import { jobTypes, type TJobType } from "types"

export const TypeFilters = () => {
  const { appState, dispatch } = useContext(CromulentContext)
  const currentJobTypes = appState.options.filters.jobTypes

  const onClick = (name: string) => {
    const jobType = name as TJobType
    dispatch({ type: 'updateJobType', payload: { jobType }})
  }

  const filters = jobTypes.map(
    jobType => {
      const checked = currentJobTypes.includes(jobType)
      return (
        <li key={jobType}>
          <Checkbox 
            checked={checked} 
            onClick={onClick} 
            name={jobType} 
            text={jobTypeToText(jobType)} 
          />
        </li>
      )
    }
  )
  
  return (
    <div>
      <div className="grey">Filter by remote &amp; hybrid</div>
      <ul className="checkboxList">
        {filters}
      </ul>
    </div>
  )
}
