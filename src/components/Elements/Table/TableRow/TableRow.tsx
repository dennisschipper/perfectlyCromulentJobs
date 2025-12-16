import { SaveButton } from "components/Elements/Buttons/SaveButton/SaveButton"
import type { IJob } from "types"
import { PositionCell } from "../TableCells/PositionCell/PositionCell"
import { CompanyCell } from "../TableCells/CompanyCell/CompanyCell"
import { LocationCell } from "../TableCells/LocationCell/LocationCell"
import { TypeCell } from "../TableCells/TypeCell/TypeCell"
import { SalaryCell } from "../TableCells/SalaryCell/SalaryCell"

interface ITableRowProps {
  job: IJob
}

export const TableRow = (props: ITableRowProps) => {
  return (
    <tbody className="tableRow">
      <tr>
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
    </tbody>
  )
}
