import type { ReactNode } from "react"

interface IFilterItemTextProps {
  children: ReactNode
}

export const FilterItemText = (props: IFilterItemTextProps) => {
  return (
    <div className="filterItemText">
      <span>"</span>
      <span className="text">{props.children}</span>
      <span>"</span>
    </div>
  )
}
