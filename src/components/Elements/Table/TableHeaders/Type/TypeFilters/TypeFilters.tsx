import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"

interface ITypeFiltersProps {

}

export const TypeFilters = (props: ITypeFiltersProps) => {
  return (
    <div>
      <div className="grey">Filter by remote &amp; hybrid</div>
      <ul className="checkboxList">
        <li>
          <Checkbox name="inOffice" text="In office" />
        </li>
        <li>
          <Checkbox name="hybrid" text="Hybrid" />
        </li>
        <li>
          <Checkbox name="remote" text="Remote" />
        </li>
      </ul>
    </div>
  )
}
