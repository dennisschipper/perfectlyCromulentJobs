import { useEffect, type CSSProperties } from "react"
import useMeasure from "react-use-measure"
import { motion, type MotionProps } from "motion/react"
import type { ICurtainItem } from "types"

interface ICurtainItemProps {
  item: ICurtainItem
  update: (item: ICurtainItem) => void
  left: number
  overflowing: boolean
  last?: boolean
}

export const CurtainItem = (props: ICurtainItemProps) => {
  const [ ref, bounds ] = useMeasure()
  const { left, overflowing } = props 
  const item: ICurtainItem = { ...props.item, bounds}

  useEffect(() => {
    props.update(item)
  }, [bounds])

  useEffect(() => {
    props.update(item)
    return () => props.update({...item, bounds: undefined})
  }, [])

  
  const className = `
    curtainItem 
    ${overflowing ? 'overflowing' : ''} 
    ${item.essential ? 'essential' : ''}
    ${props.last ? 'last' : ''} 
  `

  const style: CSSProperties = { left }

  const motionProps: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 0, props.overflowing ? 0 : 1], left },
    exit: { opacity: 0 },
  }

  return (
    <motion.div 
      ref={ref} 
      {...motionProps} 
      className={className} 
      style={style} 
      onAnimationEnd={() => props.update(item)}
    >
      {item.content}
    </motion.div>
  )
}
