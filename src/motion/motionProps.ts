import type { MotionProps } from "motion/react";

export const motionPropsBase: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity : 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.33 }
}
