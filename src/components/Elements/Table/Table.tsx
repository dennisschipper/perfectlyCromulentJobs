import { useState } from "react"
import { TableHeader } from "./TableHeader/TableHeader"
import type { IHeaderWidths } from "types"
import { TableRow } from "./TableRow/TableRow"
import { jobs } from "data/testData"

export const Table = () => {
  const initialHeaderWidths: IHeaderWidths = {
    company: 0, location: 0, position: 0, type: 0, salary: 0
  }

  const [ widths, updateWidths ] = useState<IHeaderWidths>(initialHeaderWidths)

  const updateWidth = (updatedWidths: Partial<IHeaderWidths>) => {
    // Use the updated state instead of the stale one due to the useEffect in the
    // parent (i think).
    updateWidths(widths => ({...widths, ...updatedWidths}))
  }

  const rows = jobs.map(job => <TableRow widths={widths} job={job} key={job.id} />)

  const [ rowWidth, updateRowWidth ] = useState<string | number>(0)

  return (
    <div className="tableWrapper">
      <div className="table" style={{ minWidth: rowWidth}}>
        <TableHeader updateRowWidth={updateRowWidth} updateWidth={updateWidth} />
        {rows}
      </div>
    </div>
  )
}
