import { autoUpdate, flip, size, useClick, useDismiss, useFloating, useInteractions, useTransitionStyles, type Middleware } from "@floating-ui/react"
import { cloneElement, useState, type ReactElement } from "react"

interface IDropdownProps {
  target: ReactElement
  content: ReactElement
}

export const Dropdown = (props: IDropdownProps) => {
  const [ open, onOpenChange ] = useState<boolean>(false)

  // For mobile, we'll move the ppopover to the top left and handle the rest 
  // with css.
  const resizeForMobile = (): Middleware => {
    return ({
      name: 'resizeForMobile',
      fn: ({x, y}) => {
        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        return ({ x: isMobile ? 10 : x, y: isMobile ? 10 : y })
      }
    })
  }

  const { refs, floatingStyles, context } = useFloating({ 
    open, 
    onOpenChange,
    placement: 'bottom-start',
    middleware: [ 
      flip(), 
      resizeForMobile(), 
      size({
        apply({ availableHeight, elements }) {
          const value = `${Math.max(0, availableHeight - 20)}px`;
          elements.floating.style.maxHeight = value;
        }
      })
    ],
    whileElementsMounted: autoUpdate,
    strategy: 'fixed'
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  
  const { styles, isMounted } = useTransitionStyles(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([ click, dismiss ])

  const onClose = () => onOpenChange(false)  

  const target = cloneElement<any>(
    props.target, { ref: refs.setReference, ...getReferenceProps()}
  )

  const content = cloneElement<any>(props.content, { onClose })

  return (
    <>
      { target }
      { isMounted &&
        <div 
          className="dropdownContent"
          ref={refs.setFloating} 
          style={{...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {content}
        </div>
      }
    </>
  )
}
