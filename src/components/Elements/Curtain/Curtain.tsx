import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"
import { curtainItemsInSpace, getItemsWidth, minItemsHeight, positionItems, removeElementFromState, updateElementInState } from "./itemHelpers"
import type { ICurtainItem } from "types"
import { CurtainItem } from "./CurtainItem/CurtainItem"

interface ICurtainProps {
  items: ICurtainItem[]
  extraControl?: ReactNode
  containerWidth: number
  updateHiddenCount?: (count: number) => void
}

export const Curtain = (props: ICurtainProps) => {
  const [ elements, updateElements ] = useState<ICurtainItem[]>([])

  const update = (element: ICurtainItem) => {
    if (element.bounds) updateElementInState(element, updateElements)
    if (!element.bounds) removeElementFromState(element, updateElements)
  }

  const minHeight = minItemsHeight(elements)
  const itemsInSpace = curtainItemsInSpace(elements, props.containerWidth)

  useEffect(() => {
    props.updateHiddenCount && props.updateHiddenCount(itemsInSpace.out.length)
  }, [itemsInSpace.essential.length, itemsInSpace.in.length, itemsInSpace.out.length])
  
  const items = props.items.map(
    item => {
      const left = positionItems(item, [...itemsInSpace.in, ...itemsInSpace.essential])
      const overflowing = !!itemsInSpace.out.find(i => i.id === item.id)
      const last = 
        (itemsInSpace.in.findIndex(i => i.id === item.id) === itemsInSpace.in.length - 1) &&
        itemsInSpace.essential.length === 0

      return (
        <CurtainItem 
          key={item.id} 
          item={item} 
          update={update} 
          left={left}
          overflowing={overflowing}
          last={last}
        />
      )
    }
  )

  const totalWidth = getItemsWidth([...itemsInSpace.in, ...itemsInSpace.essential])
  const motionProps: MotionProps = { 
    animate: { width: Math.min(totalWidth, props.containerWidth) } 
  }
  const style: CSSProperties = { minHeight }

  return (
    <motion.div style={style} {...motionProps} className="curtain">
      <AnimatePresence>
        {items}
      </AnimatePresence>
    </motion.div>
  )
}
