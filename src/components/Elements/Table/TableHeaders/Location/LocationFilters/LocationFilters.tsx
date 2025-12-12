import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { deselectAllLocations, getLocationsFromJobs, getUniqueCities, getUniqueCountries, isCountryFullySelected, isCountryPartiallySelected, isCountrySelected, selectAllLocations, toggleCityInLocations } from "helpers"
import { useContext } from "react"
import type { ILocation } from "types"
import { CityList } from "./CityList/CityList"
import { CountryCheckbox } from "./CountryCheckbox/CountryCheckbox"

export const LocationFilters = () => {
  const { appState, dispatch } = useContext(CromulentContext)
  const locationsFromJobs = getLocationsFromJobs(appState.jobs) 
  const selectedLocations = appState.options.filters.locations
  const countries = getUniqueCountries(locationsFromJobs)
  const cities = getUniqueCities(locationsFromJobs)
  const allLocations = [...countries, ...cities]
  
  const selectAllCountryLocations = (location: ILocation) => {
    const locations = allLocations.filter(l => l.country === location.country)
    const updatedFilters = selectAllLocations(locations, selectedLocations)
    dispatch({ type: 'updateLocationFilters', payload: { locations: updatedFilters }})
  }

  const deselectAllCountryLocations = (location: ILocation) => {
    const updatedFilters = deselectAllLocations(location, selectedLocations)
    dispatch({ type: 'updateLocationFilters', payload: { locations: updatedFilters }})
  }

  const onClickCity = (location: ILocation) => {    
    const updatedFilters = toggleCityInLocations(location, selectedLocations)
    dispatch({ type: 'updateLocationFilters', payload: { locations: updatedFilters }})
  }

  const onClickCountry = (location: ILocation) => {
    // We have to make some checks before dispatching when clicking on a country.
    // Keep in mind, there are posts with only the country, or only the city and we 
    // have to accomodate all cases.
    
    // * Neither the country, nor any of it's locations are selected.
    const countrySelected = isCountrySelected(location, selectedLocations)
    if (!countrySelected) selectAllCountryLocations(location)
    
    // * The country and all it's locations are selected.
    const countryFullySelected = isCountryFullySelected(location, selectedLocations, allLocations)
    if (countryFullySelected) deselectAllCountryLocations(location)
    
    // * If some of a country's location are selected
    const countryPartialySelected = isCountryPartiallySelected(location, selectedLocations, allLocations)
    if (countryPartialySelected) selectAllCountryLocations(location)
  }

  const locations = countries.map(
    l => {
      const countryCities = cities.filter(loc => loc.country === l.country)
      return (
        <li key={l.country}>
          <CountryCheckbox 
            selectedLocations={selectedLocations}
            location={l}
            locations={countryCities} 
            onClick={onClickCountry}
          />
          <CityList 
            selectedLocations={selectedLocations}
            locations={countryCities} 
            country={l} 
            onClick={onClickCity}
          />
        </li>
      )
    }
  )

  return (
    <div>
      <div className="grey">Filter locations.</div>
      <ul className="checkboxList">
        {locations}
      </ul>
    </div>
  )
}
