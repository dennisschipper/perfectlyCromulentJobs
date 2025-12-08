interface IFilterCountProps {
  total: number | string
  current: number | string
}

export const FilterCount = (props: IFilterCountProps) => {
  return (
    <div className="filterCount">
      <span className="mobile">Showing</span>
      <span>{props.current} of {props.total}</span>
    </div>
  )
}
