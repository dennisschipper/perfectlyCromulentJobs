export interface IJob {
  position: string
  company: string
  remote: boolean
  remoteLocations: string[]
  locations: string[]
  salary: string | null
  sourceId: string
  id: string
}
