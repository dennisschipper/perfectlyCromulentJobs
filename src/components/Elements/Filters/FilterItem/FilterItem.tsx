import type { ReactNode } from "react"

interface IFilterItemProps {
  children: ReactNode
}

export const FilterItem = (props: IFilterItemProps) => {
  return (
    <div className="filterItem">
      {props.children}
    </div>
  )
}
