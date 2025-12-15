import type { TJobType, TPositionType } from "types";

export const positionTypeToText = (positionType: TPositionType) => {
  switch(positionType) {
    case 'backEnd': return "Backend"
    case 'design': return "Design"
    case 'engineering': return "Engineering"
    case 'frontEnd': return "Front end"
    case 'fullStack': return "Full stack"
    case 'marketing': return "Marketing"
    case 'other': return "Other"
    case 'sales': return "Sales"
  }
}

export const positionTypeToAbbr = (positionType: TPositionType) => {
  switch(positionType) {
    case 'backEnd': return "Be"
    case 'design': return "Des"
    case 'engineering': return "Eng"
    case 'frontEnd': return "Fe"
    case 'fullStack': return "Fs"
    case 'marketing': return "Mrk"
    case 'other': return "Oth"
    case 'sales': return "Sls"
  }
}

export const jobTypeToText = (jobType: TJobType) => {
  switch(jobType) {
    case 'hybrid': return "Hybrid"
    case 'onSite': return "On site"
    case 'remote': return "Remote"
  }
}
