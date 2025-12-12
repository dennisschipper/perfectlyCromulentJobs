import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox";
import { locationExists } from "helpers";
import type { ILocation } from "types";

interface ICityListProps {
  selectedLocations: ILocation[]
  country: ILocation
  locations: ILocation[]
  onClick: (location: ILocation) => void
}

export const CityList = (props: ICityListProps) => {
  if (!props.locations.length) return null
  
  const locations = props.locations.map(
    location => {
      const checked: boolean = locationExists(location, props.selectedLocations)
      const onClick = () => props.onClick({ ...props.country, city: location.city })

      return location.city && (
        <li key={location.city}>
          <Checkbox 
            name={location.city}
            text={location.city}
            checked={checked}
            onClick={onClick}
          />
        </li>
      )
    }
  )

  return (
    <ul>
      {locations}
    </ul>
  )
}
