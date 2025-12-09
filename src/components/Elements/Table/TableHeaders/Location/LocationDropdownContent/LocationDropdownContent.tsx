import type { IClonedDropdownProps } from "types"
import { LocationSearch } from "../LocationSearch/LocationSearch"
import { LocationFilters } from "../LocationFilters/LocationFilters"
import { LocationDropdownFooter } from "../LocationDropdownFooter/LocationDropdownFooter"

interface iLocationDropdownContentProps extends IClonedDropdownProps {}

export const LocationDropdownContent = (props: iLocationDropdownContentProps) => {
  return (
    <>
      <LocationSearch />
      <hr />
      <div className="content">
        <LocationFilters />
      </div>
      <hr />
      <LocationDropdownFooter />
    </>
  )
}
