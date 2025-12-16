import { TableHeaderTitle } from "../../TableHeaderTitle/TableHeaderTitle"
import { LocationControl } from "./LocationControl/LocationControl"
import { LocationDropdownContent } from "./LocationDropdownContent/LocationDropdownContent"

export const Location = () => {
  return (
    <TableHeaderTitle 
      title="Location"
      control={<LocationControl onClick={null!} ref={null!} />}
      controlContent={<LocationDropdownContent onClose={null!} />}
    />
  )
}
