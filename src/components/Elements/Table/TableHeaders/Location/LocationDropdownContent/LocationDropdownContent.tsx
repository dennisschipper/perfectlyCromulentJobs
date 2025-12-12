import type { IClonedDropdownProps } from "types"
import { LocationSearch } from "../LocationSearch/LocationSearch"
import { LocationFilters } from "../LocationFilters/LocationFilters"
import { LocationDropdownFooter } from "../LocationDropdownFooter/LocationDropdownFooter"
import { MobileDropdownControls } from "components/Elements/Dropdown/MobileDropdownControls/MobileDropdownControls"

interface iLocationDropdownContentProps extends IClonedDropdownProps {}

export const LocationDropdownContent = (props: iLocationDropdownContentProps) => {
  return (
    <>
      <MobileDropdownControls onClose={props.onClose} />
      <LocationSearch />
      <hr />
      <div className="content">
        <LocationFilters />
      </div>
      <hr />
      <LocationDropdownFooter onClose={props.onClose} />
    </>
  )
}
