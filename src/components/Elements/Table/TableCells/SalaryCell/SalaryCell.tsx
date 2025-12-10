import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"

interface ISalaryCellProps {
  job: IJob
}

export const SalaryCell = (props: ISalaryCellProps) => {
  const salary = props.job.salary
  return (
    <TableCell>
      <div className="salaryCell">
        <span className={`textClipper ${!salary ? 'grey' : ''}`}>
          {salary || 'n/a'}
        </span>
      </div>
    </TableCell>
  )
}
