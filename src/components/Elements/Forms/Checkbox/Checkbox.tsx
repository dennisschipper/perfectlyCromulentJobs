import { useState } from "react"

interface ICheckboxProps {
  name: string
  disabled?: boolean
  text: string
  intermediate?: boolean
}

export const Checkbox = (props: ICheckboxProps) => {
  const { intermediate } = props
  const [ checked, updateChecked ] = useState<boolean>(false)
  const onChange = () => updateChecked(!checked)
  const className = `
    checkbox 
    ${checked ? "checked" : "" }
    ${intermediate ? "intermediate" : ""}
  `
  return (
    <label htmlFor={props.name} className={className} tabIndex={0}>
      <input 
        id={props.name} 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
        disabled={props.disabled}
        tabIndex={-1}
      />
      <div className="check">
        <div />
      </div>
      <div className="text">{props.text}</div>
    </label>
  )
}
