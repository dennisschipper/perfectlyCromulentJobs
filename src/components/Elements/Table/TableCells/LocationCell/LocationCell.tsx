import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"

interface ILocationCellProps {
  job: IJob
}

export const LocationCell = (props: ILocationCellProps) => {
  return (
    <TableCell>
      <div className="locationCell">
        <span className="textClipper">{props.job.locations}</span>
      </div>
    </TableCell>
  )
}
