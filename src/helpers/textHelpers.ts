import type { TPositionType } from "types";

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
