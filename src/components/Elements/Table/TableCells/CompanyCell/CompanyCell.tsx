import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"

interface ICompanyCellProps {
  job: IJob
}

export const CompanyCell = (props: ICompanyCellProps) => {
  return (
    <TableCell>
      <div className="companyCell">
        <span className="textClipper">{props.job.company}</span>
      </div>
    </TableCell>
  )
}
