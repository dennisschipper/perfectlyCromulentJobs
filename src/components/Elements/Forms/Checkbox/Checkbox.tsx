import type { BaseSyntheticEvent, KeyboardEventHandler } from "react"

interface ICheckboxProps {
  name: string
  disabled?: boolean
  text: string
  intermediate?: boolean
  onClick: (name: string) => void
  checked: boolean
}

export const Checkbox = (props: ICheckboxProps) => {
  const { intermediate } = props
  
  const className = `
    checkbox 
    ${props.checked ? "checked" : "" }
    ${intermediate ? "intermediate" : ""}
  `

  const onClick = (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    props.onClick && props.onClick(props.name)
  }

  const onKeyDown: KeyboardEventHandler<HTMLLabelElement> = (e) => {
    e.key === 'Enter' && onClick(e)
  }

  return (
    <label htmlFor={props.name} className={className} tabIndex={0} onKeyDown={onKeyDown}>
      <input 
        id={props.name} 
        type="checkbox" 
        checked={props.checked}
        disabled={props.disabled}
        tabIndex={-1}
        onClick={onClick}
      />
      <div className="check">
        <div />
      </div>
      <div className="text">{props.text}</div>
    </label>
  )
}
