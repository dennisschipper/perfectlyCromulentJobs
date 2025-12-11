import { useEffect } from "react"
import useMeasure from "react-use-measure"
import type { IHeaderWidths } from "types"
import { TableHeaderTitle } from "../TableHeaderTitle/TableHeaderTitle"
import { Position } from "../TableHeaders/Position/Position"
import { Type } from "../TableHeaders/Type/Type"
import { Location } from "../TableHeaders/Location/Location"

interface ITableHeaderProps {
  updateWidth: (widths: Partial<IHeaderWidths>) => void
  updateRowWidth: (rowWidth: number | string) => void
}

export const TableHeader = (props: ITableHeaderProps) => {
  const [ rowRef, rowBounds ] = useMeasure()
  const [ positionRef, positionBounds ] = useMeasure()
  const [ companyRef, companyBounds ] = useMeasure()
  const [ typeRef, typeBounds ] = useMeasure()
  const [ locationRef, locationBounds ] = useMeasure()
  const [ salaryRef, salaryBounds ] = useMeasure()
  
  // Ugh
  useEffect(() => props.updateWidth({ position: positionBounds.width }), [positionBounds])
  useEffect(() => props.updateWidth({ company: companyBounds.width }), [companyBounds])
  useEffect(() => props.updateWidth({ type: typeBounds.width }), [typeBounds])
  useEffect(() => props.updateWidth({ location: locationBounds.width }), [locationBounds])
  useEffect(() => props.updateWidth({ salary: salaryBounds.width }), [salaryBounds])
  
  // The scrolled element needs to know it's own specific width - we'll get the
  // full size of the header, then apply it to .table to avoid scroller issues
  // like elements appearing clipped off when the content is scrolled.
  useEffect(() => props.updateRowWidth(rowBounds.width), [rowBounds])
  
  return (
    <header className="tableHeader">
      <ul className="row" ref={rowRef}>
        <li className="saveColumn">
          <span className="grey">Save</span>
        </li>
        <li ref={positionRef} className="positionColumn">
          <Position />
        </li>
        <li ref={companyRef} className="companyColumn">
          <TableHeaderTitle title="Company" />
        </li>
        <li ref={typeRef}>
          <Type />
        </li>
        <li ref={locationRef} className="locationColumn">
          <Location />
        </li>
        <li ref={salaryRef}>
          <TableHeaderTitle title="Salary" />
        </li>
      </ul>
    </header>
  )
}
