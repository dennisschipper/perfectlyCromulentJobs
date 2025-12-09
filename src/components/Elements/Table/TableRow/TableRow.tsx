import { SaveButton } from "components/Elements/Buttons/SaveButton/SaveButton"
import type { IHeaderWidths, IJob } from "types"

interface ITableRowProps {
  widths: IHeaderWidths
  job: IJob
}
export const TableRow = (props: ITableRowProps) => {
  return (
    <div className="tableRow">
      <ul className="row">
        <li className="saveColumn">
          <SaveButton />
        </li>
        <li style={{ width: props.widths.position}}>
          <div className="positionColumn">
            <span>{props.job.position}</span>
          </div>
        </li>
        <li className="companyColumn" style={{ width: props.widths.company}}>
          <div className="positionCompany">
            {props.job.company}
          </div>
        </li>
        <li className="remoteColumn" style={{ width: props.widths.remote}}>
          {props.job.remote ? "yes" : "no"}
        </li>
        <li className="position" style={{ width: props.widths.location}}>
          n/a
        </li>
        <li className="position" style={{ width: props.widths.salary}}>
          n/a
        </li>
      </ul>
    </div>
  )
}
