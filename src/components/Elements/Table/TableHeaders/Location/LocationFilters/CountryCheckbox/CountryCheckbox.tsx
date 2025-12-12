import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"
import { locationExists } from "helpers"
import type { ILocation } from "types"

interface ICountryCheckboxProps {
  selectedLocations: ILocation[]
  location: ILocation
  locations: ILocation[]
  onClick: (location: ILocation) => void
}

export const CountryCheckbox = (props: ICountryCheckboxProps) => {
  const onClick = () => props.onClick(props.location)
  const selectedCountryLocations = props.selectedLocations.filter(
    l => l.country === props.location.country && l.city
  )
  
  const checked = locationExists(props.location, props.selectedLocations)
  const intermediate = 
    (
      selectedCountryLocations.length !== props.locations.length &&
      selectedCountryLocations.length !== 0 &&
      selectedCountryLocations.length !== props.locations.length
    ) ||
    (
      selectedCountryLocations.length === props.locations.length &&
      selectedCountryLocations.length > 0
    )

  return (
    <Checkbox 
      checked={checked}
      intermediate={intermediate}
      name={props.location.country}
      text={props.location.country}
      onClick={onClick}
    />
  )
}
