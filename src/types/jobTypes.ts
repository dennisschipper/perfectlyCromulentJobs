export type TJobType = 'remote' | 'hybrid' | 'onSite'

export interface IJob {
  position: string
  company: string
  type: TJobType[]
  locations: { country: string, city?: string }[]
  salary: string | null
  sourceId: string
  id: string
}
