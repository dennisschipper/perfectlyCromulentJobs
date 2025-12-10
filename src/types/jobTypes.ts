export type TJobType = 'remote' | 'hybrid' | 'onSite'

export interface IJob {
  position: string
  company: string
  type: TJobType[]
  remoteLocations: string[]
  locations: string[]
  salary: string | null
  sourceId: string
  id: string
}
