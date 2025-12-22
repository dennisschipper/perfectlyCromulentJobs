import { CromulentContext } from "components/Elements/CromulentContext/CromulentContext"
import { Curtain } from "components/Elements/Curtain/Curtain"
import { FilterItem } from "components/Elements/Filters/FilterItem/FilterItem"
import { FilterItemCount } from "components/Elements/Filters/FilterItemCount/FilterItemCount"
import { FilterItemText } from "components/Elements/Filters/FilterItemText/FilterItemText"
import { positionTypeToAbbr } from "helpers"
import { motionPropsBase } from "motion/motionProps"
import { AnimatePresence, motion } from "motion/react"
import { useContext, useState, type Ref } from "react"
import useMeasure from "react-use-measure"
import type { ICurtainItem } from "types"

interface IFilterByPositionControlProps {
  ref: Ref<HTMLButtonElement>
  onClick: () => null
}

export const FilterByPositionControl = (props: IFilterByPositionControlProps) => {
  const { appState } = useContext(CromulentContext)
  const [ ref, bounds ] = useMeasure()
  const [ counterRef, counterBounds ] = useMeasure()
  const [ hiddenCount, updateHiddenCount ] = useState<number>(0)
  const filters = appState.options.filters.positionTypes
  const textFilter = appState.options.filters.position
  const filterItems = filters.map(filter => positionTypeToAbbr(filter))

  const filtersAsCurtainItems = filterItems
    .map(item => ({ id: item, content: <FilterItem>{item}</FilterItem> }))
  
    const textFilterItem = { 
    id: "textFilter", 
    content: <FilterItemText>{textFilter}</FilterItemText>, 
    essential: true
  }

  const curtainItems: ICurtainItem[] = !!textFilter.length ?
    [ ...filtersAsCurtainItems, textFilterItem ] : filtersAsCurtainItems
  
  // The curtain needs to know where to stop the overflow. Using useMeasure here
  // (minus the space for the possible "+x") but could be anything.
  const filterContent = (
    <Curtain 
      items={curtainItems} 
      containerWidth={bounds.width - counterBounds.width} 
      updateHiddenCount={updateHiddenCount}
    />
  )
  const filterBlank = <motion.span key="enter" {...motionPropsBase}>Filter by position</motion.span>
  const hasFilters = !filters.length && !textFilter.length
  
  // console.log(hiddenCount)
  
  return (
    <>
      <div className="controlListWrapper" ref={ref}>
        <button onClick={props.onClick} ref={props.ref} className="minor">
          <AnimatePresence mode="wait">
            { hasFilters ? filterBlank : filterContent }
          </AnimatePresence>
        </button>
        <AnimatePresence>
          { hiddenCount > 0 && 
            <FilterItemCount ref={counterRef}>+{hiddenCount}</FilterItemCount>
          }
        </AnimatePresence>
      </div>
    </>
  )
}
