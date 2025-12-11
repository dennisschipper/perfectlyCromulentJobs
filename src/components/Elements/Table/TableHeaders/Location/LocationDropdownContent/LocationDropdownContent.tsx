import type { IClonedDropdownProps } from "types"
import { LocationSearch } from "../LocationSearch/LocationSearch"
import { LocationFilters } from "../LocationFilters/LocationFilters"
import { LocationDropdownFooter } from "../LocationDropdownFooter/LocationDropdownFooter"
import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { useContext } from "react"

interface iLocationDropdownContentProps extends IClonedDropdownProps {}

export const LocationDropdownContent = (props: iLocationDropdownContentProps) => {
  const { appState } = useContext(CromulentContext)
  
  const locations = appState.jobs
    .map(j => j.locations)
    .reduce((acc, locs) => [...acc, ...locs], [])
  
  return (
    <>
      <LocationSearch />
      <hr />
      <div className="content">
        <LocationFilters locations={locations} />
      </div>
      <hr />
      <LocationDropdownFooter />
    </>
  )
}
