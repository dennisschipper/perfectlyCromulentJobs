import { Fragment } from "react/jsx-runtime"
import type { IJob } from "types"
import { JobLocation } from "../JobLocation/JobLocation"

interface IJobLocationsProps {
  locations: IJob['locations']
}

export const JobLocations = (props: IJobLocationsProps) => {
  const { locations } = props
  if (!locations || !locations.length) return <span className="grey">n/a</span>

  const locs = locations.map(
    (location, i) => {  
      const comma = i < locations.length - 1 ? <>,&nbsp;</> : null
      return (
        <Fragment key={i}>
          <JobLocation location={location} />{comma}
        </Fragment>
      )
    }
  )
  
  return (
    <span className="jobLocations">
      {locs}
    </span>
  )
}
