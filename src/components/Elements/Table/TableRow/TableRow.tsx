import { SaveButton } from "components/Elements/Buttons/SaveButton/SaveButton"
import type { IJob } from "types"
import { PositionCell } from "../TableCells/PositionCell/PositionCell"
import { CompanyCell } from "../TableCells/CompanyCell/CompanyCell"
import { LocationCell } from "../TableCells/LocationCell/LocationCell"
import { TypeCell } from "../TableCells/TypeCell/TypeCell"
import { SalaryCell } from "../TableCells/SalaryCell/SalaryCell"
import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext, useState, type KeyboardEventHandler } from "react"
import { HnPost } from "components/Elements/HnPost/HnPost"

interface ITableRowProps {
  job: IJob
  tableScroll: number
}

export const TableRow = (props: ITableRowProps) => {
  const { appState } = useContext(CromulentContext)
  const [ expanded, updateExpanded ] = useState<boolean>(false)
  const onClick = () => updateExpanded(!expanded)
  const onKeyDown: KeyboardEventHandler<HTMLTableRowElement> = (e) => {
    e.key === 'Enter' && onClick()
  }
  
  const job = appState.hnJobs.find(hnJob => String(hnJob.id) === props.job.sourceId)



  return (
    <tbody className={`tableRow ${expanded ? "expanded" : ""}`}>
      <tr onClick={onClick} onKeyDown={onKeyDown} className="jobRow" tabIndex={0}>
        <td className="saveColumn">
          <SaveButton job={props.job} />
        </td>
        <td className="positionColumn">
          <PositionCell job={props.job} />
        </td>
        <td className="companyColumn">
          <CompanyCell job={props.job} />
        </td>
        <td className="typeColumn">
          <TypeCell job={props.job} />
        </td>
        <td className="position">
          <LocationCell job={props.job} />
        </td>
        <td className="position">
          <SalaryCell job={props.job} />
        </td>
      </tr>
      <HnPost tableScroll={props.tableScroll} display={expanded} post={job} />
    </tbody>
  )
}
