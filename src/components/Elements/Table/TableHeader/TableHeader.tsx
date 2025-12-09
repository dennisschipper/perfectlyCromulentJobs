import { useEffect } from "react"
import useMeasure from "react-use-measure"
import type { IHeaderWidths } from "types"

interface ITableHeaderProps {
  updateWidth: (widths: Partial<IHeaderWidths>) => void
  updateRowWidth: (rowWidth: number | string) => void
}

export const TableHeader = (props: ITableHeaderProps) => {
  const [ rowRef, rowBounds ] = useMeasure()
  const [ positionRef, positionBounds ] = useMeasure()
  const [ companyRef, companyBounds ] = useMeasure()
  const [ remoteRef, remoteBounds ] = useMeasure()
  const [ locationRef, locationBounds ] = useMeasure()
  const [ salaryRef, salaryBounds ] = useMeasure()
  
  // Ugh
  useEffect(() => props.updateWidth({ position: positionBounds.width }), [positionBounds])
  useEffect(() => props.updateWidth({ company: companyBounds.width }), [companyBounds])
  useEffect(() => props.updateWidth({ remote: remoteBounds.width }), [remoteBounds])
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
          Save
        </li>
        <li ref={positionRef} className="positionColumn">
          Position <button className="minor">Filter by position</button>
        </li>
        <li ref={companyRef} className="companyColumn">
          Company <button className="minor">All</button>
        </li>
        <li ref={remoteRef}>
          Remote <button className="minor">All</button>
        </li>
        <li ref={locationRef}>
          Location <button className="minor">All</button>
        </li>
        <li ref={salaryRef}>
          Salary <button className="minor">All</button>
        </li>
      </ul>
    </header>
  )
}
