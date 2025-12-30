import localforage from "localforage";
import type { IAppState, IHnJobs, IJob, ILocation, IUserOptions, TJobType, TPositionType } from "types";

export const filterPosition = (position: string) => (job: IJob) => (
  job.position.toLowerCase().includes(position.toLowerCase())
)

export const filterPositionType = (positionTypes: TPositionType[]) => (job: IJob) => (
  positionTypes.length === 0 ? 
    true : 
    job.positionType.find(j => positionTypes.includes(j))
)

export const filterJobType = (jobTypes: TJobType[]) => (job: IJob) => (
  jobTypes.length === 0 ? true : job.type.some(jt => jobTypes.includes(jt))
)

export const filterLocations = (locations: ILocation[]) => (job: IJob) => (
  locations.length === 0 ? true : job.locations.find(l => locationExists(l, locations))
)

export const filterLocationsByText = (locationText: string) => (job: IJob) => (
  locationText.length === 0 ? true : 
  job.locations.some(l => l.country.toLowerCase().includes(locationText.toLowerCase())) ||
  job.locations.some(l => l.city?.toLowerCase().includes(locationText.toLowerCase()))
)

export const filterJobs = (jobs: IJob[], filters: IAppState['options']['filters']): IJob[] => (
  jobs
    .filter(filterPosition(filters.position.toLowerCase()))
    .filter(filterPositionType(filters.positionTypes))
    .filter(filterJobType(filters.jobTypes))
    .filter(filterLocations(filters.locations))
    .filter(filterLocationsByText(filters.locationText))
)

export const isFiltering = (filters: IUserOptions['filters']): boolean => !(
  !!filters.position.length ||
  !!filters.positionTypes.length ||
  !!filters.jobTypes.length ||
  !!filters.locations.length ||
  !!filters.locationText.length
)

export const getLocationsFromJobs = (jobs: IJob[]): ILocation[] => {
  return jobs.map(j => j.locations).reduce((acc, locs) => [...acc, ...locs], [])
}

export const getUniqueCountries = (locations: IJob['locations']): ILocation[] => (
  locations.reduce(
    (acc: ILocation[], location) => {
      const exists = !!acc.find(l => l.country === location.country)
      return exists ? acc : [...acc, ({ country: location.country })]
    }, []
  )
)

export const getUniqueCities = (locations: IJob['locations']): ILocation[] => (
  locations
    .filter(location => location.city)
    .reduce(
      (acc: ILocation[], location) => {
        const exists = !!acc.find(l => l.country === location.country && l.city === location.city)
        return exists ?
          acc : [...acc, location]
      }, []
    )
)

export const locationExists = (location: ILocation, locations: ILocation[]) => (
  !!locations.find(l => l.country === location.country && l.city === location.city)
)

export const isCountrySelected = (location: ILocation, locations: ILocation[]) => (
  !!locations.find(l => l.country === location.country && !l.city)
)

export const isCountryFullySelected = (location: ILocation, selectedLocations: ILocation[], allLocations: ILocation[]) => {
  const countryInSelected = selectedLocations.filter(l => l.country === location.country)
  const countryInFullList = allLocations.filter(l => l.country === location.country)
  return countryInSelected.length === countryInFullList.length
}

// A country is partially selected if only some or none of it's cities are selected,
// but not all it's cities.
export const isCountryPartiallySelected = (location: ILocation, selectedLocations: ILocation[], allLocations: ILocation[]) => {
  const onlyCountrySelected = selectedLocations.filter(l => l.country === location.country && !l.city).length === 1
  const countryInSelected = selectedLocations.filter(l => l.country === location.country && !l.city)
  const countryFullySelected = isCountryFullySelected(location, selectedLocations, allLocations)
  return onlyCountrySelected && countryInSelected.length > 0 && !countryFullySelected
}

export const selectAllLocations = (locations: ILocation[], selectedLocations: ILocation[]) => {
  return locations.reduce(
    (acc: ILocation[], location) => {
      const exists = locationExists(location, acc)
      return exists ? acc : [...acc, location]
    }, selectedLocations
  )
}

export const deselectAllLocations = (location: ILocation, locations: ILocation[]) => (
  locations.filter(l => l.country !== location.country)
)

export const toggleCityInLocations = (location: ILocation, locations: ILocation[]) => (
  locationExists(location, locations) ? 
    locations.filter(l => !(l.country === location.country && l.city === location.city)) :
    [...locations, location]
)

export const saveStoreInBrowser = (state: IAppState) => {
  localforage.setItem('cromulentJobs', state)
}

export const savedInBrowser = async (): Promise<null | IAppState> => {
  const cromulentJobs = await localforage.getItem('cromulentJobs')
  if (!cromulentJobs) return null
  return cromulentJobs as IAppState
}

export const fetchHnJobs = async (filename: string) => {
  const base = import.meta.env.BASE_URL
  const url = `${base}data/${filename}`

  return fetch(url)
    .then(r => {
      if (!r.ok) throw new Error(`Failed to fetch ${url}`)
      return r.json() as Promise<IHnJobs>
    }
  )
}
