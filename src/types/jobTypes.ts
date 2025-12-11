export type TJobType = 'remote' | 'hybrid' | 'onSite'

export const positionTypes = [
  'design',
  'frontEnd',
  'backEnd',
  'fullStack',
  'engineering',
  'sales',
  'marketing',
  'other'
] as const

export type TPositionType = typeof positionTypes[number]

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
