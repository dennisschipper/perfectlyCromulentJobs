import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"

interface ITypeFiltersProps {

}

export const TypeFilters = (props: ITypeFiltersProps) => {
  return (
    <div>
      <div className="grey">Filter by remote &amp; hybrid</div>
      <ul className="checkboxList">
        <li>
          <Checkbox checked={true} onClick={() => null} name="inOffice" text="In office" />
        </li>
        <li>
          <Checkbox checked={true} onClick={() => null} name="hybrid" text="Hybrid" />
        </li>
        <li>
          <Checkbox checked={true} onClick={() => null} name="remote" text="Remote" />
        </li>
      </ul>
    </div>
  )
}
