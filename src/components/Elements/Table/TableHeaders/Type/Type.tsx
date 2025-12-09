import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { TypeDropdownContent } from "./TypeDropdownContent/TypeDropdownContent"

export const Type = () => {
  return (
    <TableHeaderTitle 
      title="Type"
      control={<button className="minor">All</button>}
      controlContent={<TypeDropdownContent onClose={null!} />}
    />
  )
}
