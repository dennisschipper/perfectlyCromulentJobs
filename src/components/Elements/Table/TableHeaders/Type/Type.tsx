import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { TypeControl } from "./TypeControl/TypeControl"
import { TypeDropdownContent } from "./TypeDropdownContent/TypeDropdownContent"

export const Type = () => {
  return (
    <TableHeaderTitle 
      title="Type"
      control={<TypeControl onClick={null!} ref={null!} />}
      controlContent={<TypeDropdownContent onClose={null!} />}
    />
  )
}
