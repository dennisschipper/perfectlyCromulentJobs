import type { IClonedDropdownProps } from "types"
import { PositionDropdownFooter } from "../PositionDropdownFooter/PositionDropdownFooter"
import { PositionFilters } from "../PositionFilters/PositionFilters"
import { PositionSearchForm } from "../PositionSearchForm/PositionSearchForm"
import { MobileDropdownControls } from "components/Elements/Dropdown/MobileDropdownControls/MobileDropdownControls"

interface IPositionDropdownContentProps extends IClonedDropdownProps {}

export const PositionDropdownContent = (props: IPositionDropdownContentProps) => {
  
  return (
    <>
      <MobileDropdownControls onClose={props.onClose} />
      <PositionSearchForm />
      <hr />
      <div className="content">
        <PositionFilters />
      </div>
      <hr />
      <PositionDropdownFooter onClose={props.onClose} />
    </>
  )
}
