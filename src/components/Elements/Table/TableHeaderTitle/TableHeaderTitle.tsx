import { Dropdown } from "components/Elements/Dropdown/Dropdown"
import type { ReactElement } from "react"

interface ITableHeaderTitleProps {
  title: string
  control?: ReactElement
  controlContent?: ReactElement
}

export const TableHeaderTitle = (props: ITableHeaderTitleProps) => {
  const { control, controlContent } = props
  const controlElement = (!control || !controlContent) ? null : (
    <Dropdown target={control} content={controlContent} />
  )
  
  return (
    <div className="tableHeaderTitle">
      <div className="title">{props.title}</div>
      { controlElement }
    </div>
  )
}
