import { Checkbox } from "components/Elements/Forms/Checkbox/Checkbox"

export const LocationFilters = () => {
  return (
    <div>
      <div className="grey">Filter locations.</div>
      <ul className="checkboxList">
        <li>
          <Checkbox name="usa" text="USA" />
          <ul>
            <li>
              <Checkbox name="newYork" text="New York" />
            </li>
            <li>
              <Checkbox name="sanFrancisco" text="San Francisco" />
            </li>
          </ul>
        </li>
        <li>
          <Checkbox name="uk" text="UK" />
        </li>
        <li>
          <Checkbox name="canada" text="Canada" />
        </li>
      </ul>
    </div>
  )
}
