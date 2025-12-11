import type { IJob } from "types"
import { TableCell } from "../../TableCell/TableCell"
import { JobLocations } from "components/Elements/Locations/JobLocations/JobLocations"

interface ILocationCellProps {
  job: IJob
}

export const LocationCell = (props: ILocationCellProps) => {
  
  return (
    <TableCell>
      <div className="locationCell">
        <span className="textClipper">
          <JobLocations locations={props.job.locations} />
        </span>
      </div>
    </TableCell>
  )
}
