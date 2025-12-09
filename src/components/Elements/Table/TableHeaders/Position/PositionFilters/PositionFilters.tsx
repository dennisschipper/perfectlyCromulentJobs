import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"

export const PositionFilters = () => {
  return (
    <div>
      <div className="grey">Filter by type</div>
      <ul className="checkboxList">
        <li>
          <Checkbox name="frontEnd" text="Front end" />
        </li>
        <li>
          <Checkbox name="backEnd" text="Back end" />
        </li>
        <li>
          <Checkbox name="Sales" text="Sales" />
        </li>
        <li>
          <Checkbox name="marketing" text="Marketing" />
        </li>
        <li>
          <Checkbox name="other" text="Other" />
        </li>
      </ul>
    </div>
  )
}
