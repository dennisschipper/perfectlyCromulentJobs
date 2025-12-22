import { motionPropsBase } from "motion/motionProps"
import { motion } from "motion/react"
import type { ReactNode, Ref } from "react"

interface IFilterItemCountProps {
  children: ReactNode
  ref: Ref<HTMLDivElement>
}

export const FilterItemCount = (props: IFilterItemCountProps) => {
  return (
    <motion.div {...motionPropsBase} className="filterItemCount" ref={props.ref}>
      {props.children}
    </motion.div>
  )
}
