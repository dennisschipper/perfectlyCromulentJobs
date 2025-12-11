import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"
import type { IJob } from "types"

interface ILocationFiltersProps {
  locations: IJob['locations'][0][]
}

export const LocationFilters = (props: ILocationFiltersProps) => {
  const uniqueCountries = props.locations
    .map(l => l.country)
    .reduce((acc: string[], c) => acc.includes(c) ? acc : [...acc, c], [])
  
  const citiesPerCountry = (locations: IJob['locations'][0][], country: string) => {
    return locations
      .filter(l => l.country === country)
      .filter(l => !!l.city)
      .reduce((acc: string[], c) => {
        const exists = acc.includes(c.city || "")
        return exists ? acc : [...acc, c.city || ""]
      }, [])
      .map(city => <li><Checkbox checked={true} onClick={() => null} name={city} text={city} /></li>)
  }

  const locationList = uniqueCountries.map(
    country => {
      const cities = citiesPerCountry(props.locations, country)
      return (
        <li key={country}>
          <Checkbox checked={true} onClick={() => null} name={country} text={country} />
          <ul>
            {cities}
          </ul>
        </li>
      )
    }
  )

  return (
    <div>
      <div className="grey">Filter locations.</div>
      <ul className="checkboxList">
        {locationList}
      </ul>
    </div>
  )
}
