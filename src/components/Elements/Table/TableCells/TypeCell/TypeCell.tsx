import type { IJob, TJobType } from "types"
import { TableCell } from "../../TableCell/TableCell"

interface ITypeCellProps {
  job: IJob
}

export const TypeCell = (props: ITypeCellProps) => {
  const typeToText = (text: TJobType) => {
    switch(text) {
      case "hybrid": return "Hybrid"
      case "onSite": return "On site"
      case "remote": return "Remote"
    }
  }

  const type = props.job.type.map(
    t => <span className="jobType" key={t}>{typeToText(t)}</span>
  )

  return (
    <TableCell>
      <div className="typeCell">
        <span className="textClipper">
          {type}
        </span>
      </div>
    </TableCell>
  )
}
