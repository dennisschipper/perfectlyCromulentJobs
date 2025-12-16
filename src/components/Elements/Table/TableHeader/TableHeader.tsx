import { TableHeaderTitle } from "../TableHeaderTitle/TableHeaderTitle"
import { Position } from "../TableHeaders/Position/Position"
import { Type } from "../TableHeaders/Type/Type"
import { Location } from "../TableHeaders/Location/Location"

export const TableHeader = () => {  
  return (
    <thead className="tableHeader">
      <tr>
        <th className="saveColumn">
          <span className="grey">Save</span>
        </th>
        <th className="positionColumn">
          <Position />
        </th>
        <th className="companyColumn">
          <TableHeaderTitle title="Company" />
        </th>
        <th className="typeColumn">
          <Type />
        </th>
        <th className="locationColumn">
          <Location />
        </th>
        <th className="salaryColumn">
          <TableHeaderTitle title="Salary" />
        </th>
      </tr>
    </thead>
  )
}
