import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { FilterByPositionControl } from "./FilterByPositionControl/FilterByPositionControl"
import { PositionDropdownContent } from "./PositionDropdownContent/PositionDropdownContent"

export const Position = () => {
  return (
    <TableHeaderTitle 
      title="Position" 
      control={<FilterByPositionControl ref={null!} onClick={null!} />}
      controlContent={<PositionDropdownContent onClose={null!} />}
    />
  )
}
