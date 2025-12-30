import { TableHeader } from "./TableHeader/TableHeader"
import type { IJob } from "types"
import { TableRow } from "./TableRow/TableRow"
import { useEffect, useRef, useState } from "react"
import { NoResults } from "../NoResults/NoResults"

interface ITableProps {
  jobs: IJob[]
}

export const Table = (props: ITableProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [ tableScroll, updateTableScroll ] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => updateTableScroll(el.scrollLeft)
    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  const rows = props.jobs.map(
    job => <TableRow tableScroll={tableScroll} job={job} key={job.id} />
  )

  return (
    <div className="tableWrapper" ref={ref}>
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
        <NoResults display={!props.jobs.length} />
        {rows}
      </table>
    </div>
  )
}
