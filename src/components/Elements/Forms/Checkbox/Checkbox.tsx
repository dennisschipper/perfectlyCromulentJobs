import type { BaseSyntheticEvent, ChangeEventHandler } from "react"

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

  // ToDo: Check this makes sense or remove the onClick and leave this in?
  const onChange: ChangeEventHandler<HTMLInputElement> = () => {}

  return (
    <label htmlFor={props.name} className={className} tabIndex={0}>
      <input 
        id={props.name} 
        type="checkbox" 
        checked={props.checked}
        disabled={props.disabled}
        tabIndex={-1}
        onChange={onChange}
        onClick={onClick}
      />
      <div className="check">
        <div />
      </div>
      <div className="text">{props.text}</div>
    </label>
  )
}
