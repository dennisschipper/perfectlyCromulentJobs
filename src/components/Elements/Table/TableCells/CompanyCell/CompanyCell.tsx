import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"
import { memo } from "react"

interface ICompanyCellProps {
  job: IJob
}

export const CompanyCell = memo((props: ICompanyCellProps) => {
  return (
    <TableCell>
      <div className="companyCell">
        <span className="textClipper">{props.job.company}</span>
      </div>
    </TableCell>
  )
})
