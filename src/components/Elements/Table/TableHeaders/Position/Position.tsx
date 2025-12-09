import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { PositionDropdownContent } from "./PositionDropdownContent/PositionDropdownContent"

export const Position = () => {
  return (
    <TableHeaderTitle 
      title="Position" 
      control={<button className="minor">Filter by position</button>}
      controlContent={<PositionDropdownContent onClose={null!} />}
    />
  )
}
