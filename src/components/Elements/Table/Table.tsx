import { TableHeader } from "./TableHeader/TableHeader"
import type { IJob } from "types"
import { TableRow } from "./TableRow/TableRow"

interface ITableProps {
  jobs: IJob[]
}

export const Table = (props: ITableProps) => {
  const rows = props.jobs.map(job => <TableRow job={job} key={job.id} />)
  return (
    <div className="tableWrapper">
      <table>
        <colgroup>
          <col className="saveColumn" />
          <col className="positionColumn" />
          <col className="companyColumn" />
          <col className="typeColumn" />
          <col className="locationColumn" />
          <col className="salaryColumn" />
        </colgroup>
        <TableHeader />
        {rows}
      </table>
    </div>
  )
}
