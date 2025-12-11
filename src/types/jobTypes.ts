export type TJobType = 'remote' | 'hybrid' | 'onSite'
export type TPositionType = 'frontEnd' | 'backEnd' | 'fullStack' | 'engineering' | 'sales' | 'marketing' | 'other'

export interface IJob {
  position: string
  positionType: TPositionType
  company: string
  type: TJobType[]
  locations: { country: string, city?: string }[]
  salary: string | null
  sourceId: string
  id: string
}
