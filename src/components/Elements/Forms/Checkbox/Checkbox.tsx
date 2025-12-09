import { useState } from "react"

interface ICheckboxProps {
  name: string
  disabled?: boolean
  text: string
}

export const Checkbox = (props: ICheckboxProps) => {
  const [ checked, updateChecked ] = useState<boolean>(false)
  const onChange = () => {
    updateChecked(!checked)
  }
  return (
    
    <label htmlFor={props.name} className={`checkbox ${checked ? "checked" : "" }`}>
      <input 
        id={props.name} 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
        disabled={props.disabled}
      />
      <div className="check">
        <div />
      </div>
      <div className="text">{props.text}</div>
    </label>
  )
}
