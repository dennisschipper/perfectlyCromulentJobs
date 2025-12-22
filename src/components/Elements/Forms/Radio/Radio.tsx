import type { BaseSyntheticEvent } from "react"

interface IRadioProps {
  onClick: () => void
  active: boolean
}

export const Radio = (props: IRadioProps) => {
  const onClick = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    props.onClick()
  }

  const className = `radio ${props.active ? 'active' : ''}`
  
  return (
    <button className={className} onClick={onClick}>
      <span></span>
    </button>
  )
}
