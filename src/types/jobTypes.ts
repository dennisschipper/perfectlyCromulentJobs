export const jobTypes = [ 'remote', 'hybrid', 'onSite' ] as const
export type TJobType = typeof jobTypes[number]

export const positionTypes = [
  "backEnd", 
  "design", 
  "engineering", 
  "frontEnd", 
  "fullStack", 
  "marketing", 
  "other", 
  "sales"
] as const

export type TPositionType = typeof positionTypes[number]

export interface ILocation {
  country: string
  city?: string
}

export interface IJob {
  position: string
  positionType: TPositionType[]
  company: string
  type: TJobType[]
  locations: ILocation[]
  salary: string | null
  sourceId: string
  id: string
}


export interface IHnJobs {
  threadId: string
  title: string
  url: string
  fetchedAt: string
  posts: IHnJob[]
}

export interface IHnJob {
  id: number
  by: string
  text: string
}
