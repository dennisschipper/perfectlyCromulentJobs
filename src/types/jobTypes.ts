export const jobTypes = [ 'remote', 'hybrid', 'onSite' ] as const
export type TJobType = typeof jobTypes[number]

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

export interface ILocation {
  country: string
  city?: string
}

export interface IJob {
  position: string
  positionType: TPositionType
  company: string
  type: TJobType[]
  locations: ILocation[]
  salary: string | null
  sourceId: string
  id: string
}
