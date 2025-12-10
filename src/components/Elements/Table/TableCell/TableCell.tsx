import type { ReactNode } from "react"

interface ITableCellProps {
  children: ReactNode
}

export const TableCell = (props: ITableCellProps) => {
  return (
    <div className="tableCell">
      {props.children}
    </div>
  )
}
