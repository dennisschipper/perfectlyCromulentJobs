import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"

interface ILocationFilterCountryProps {
  country: string
  checked: boolean
  interediate: boolean
  onClick: (country: string) => void
}

export const LocationFilterCountry = (props: ILocationFilterCountryProps) => {
  const onClick = () => {
    props.onClick(props.country)
  }
  return (
    <li>
      <Checkbox 
        checked={props.checked} 
        onClick={onClick} 
        name={props.country} 
        text={props.country} 
      />
    </li>
  )
}
