import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"

interface IPositionCellProps {
  job: IJob
}

export const PositionCell = (props: IPositionCellProps) => {
  return (
    <TableCell>
      <div className="positionCell">
        <span className="textClipper">{props.job.position}</span>
      </div>
    </TableCell>
  )
}
