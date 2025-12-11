import type { IClonedDropdownProps } from "types"
import { TypeFilters } from "../TypeFilters/TypeFilters"
import { TypeDropdownFooter } from "../TypeDropdownFooter/TypeDropdownFooter"
import { MobileDropdownControls } from "components/Elements/Dropdown/MobileDropdownControls/MobileDropdownControls"

interface ITypeDropdownContentProps extends IClonedDropdownProps {}

export const TypeDropdownContent = (props: ITypeDropdownContentProps) => {
  return (
    <>
      <MobileDropdownControls onClose={props.onClose} />
      <div className="content">
        <TypeFilters />
      </div>
      <hr />
      <TypeDropdownFooter />
    </>
  )
}
