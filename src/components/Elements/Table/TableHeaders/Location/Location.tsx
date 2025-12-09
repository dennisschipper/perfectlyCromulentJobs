import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { LocationDropdownContent } from "./LocationDropdownContent/LocationDropdownContent"

export const Location = () => {
  return (
    <TableHeaderTitle 
      title="Location"
      control={<button className="minor">All</button>}
      controlContent={<LocationDropdownContent onClose={null!} />}
    />
  )
}
