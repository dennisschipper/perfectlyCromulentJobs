import { SaveButton } from "components/Elements/Buttons/SaveButton/SaveButton"
import type { IHeaderWidths, IJob } from "types"
import { PositionCell } from "../TableCells/PositionCell/PositionCell"
import { CompanyCell } from "../TableCells/CompanyCell/CompanyCell"
import { LocationCell } from "../TableCells/LocationCell/LocationCell"
import { TypeCell } from "../TableCells/TypeCell/TypeCell"
import { SalaryCell } from "../TableCells/SalaryCell/SalaryCell"
import { memo } from "react"

interface ITableRowProps {
  widths: IHeaderWidths
  job: IJob
}

export const TableRow = memo((props: ITableRowProps) => {
  return (
    <div className="tableRow">
      <ul className="row">
        <li className="saveColumn">
          <SaveButton job={props.job} />
        </li>
        <li style={{ width: props.widths.position}}>
          <PositionCell job={props.job} />
        </li>
        <li className="companyColumn" style={{ width: props.widths.company}}>
          <CompanyCell job={props.job} />
        </li>
        <li className="typeColumn" style={{ width: props.widths.type}}>
          <TypeCell job={props.job} />
        </li>
        <li className="position" style={{ width: props.widths.location}}>
          <LocationCell job={props.job} />
        </li>
        <li className="position" style={{ width: props.widths.salary}}>
          <SalaryCell job={props.job} />
        </li>
      </ul>
    </div>
  )
})
