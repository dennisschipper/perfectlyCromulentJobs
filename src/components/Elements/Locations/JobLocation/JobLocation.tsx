import type { IJob } from "types"

interface IJobLocationProps {
  location: IJob['locations'][number]
}

export const JobLocation = (props: IJobLocationProps) => {
  const { country, city } = props.location
  const text = city ? <span>{city}</span> : <span>{country}</span>
  return (
    <span className="jobLocation">
      {text}
    </span>
  )
}
