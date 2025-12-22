import type { ICurtainItem, ICurtainItemsInSpace, IItemsInSpace } from "types"

export const minItemsHeight = (items: ICurtainItem[]) => {
  if (items.length === 0) return 0
  const itemHeights = items.filter(it => it.bounds).map(it => it.bounds?.height || 0)
  return Math.max(...itemHeights)
}

export const updateElementInState = (element: ICurtainItem, updateElements: React.Dispatch<React.SetStateAction<ICurtainItem[]>>) => {
  updateElements(prev => {
    const elementExists = prev.find(e => element.id === e.id)
    return elementExists ? 
      prev.map(e => element.id === e.id ? element : e) :
      [...prev, element]
  })
}

export const removeElementFromState = (element: ICurtainItem, updateElements: React.Dispatch<React.SetStateAction<ICurtainItem[]>>) => {
  updateElements(prev => prev.filter(e => e.id !== element.id))
}

export const positionItems = (item: ICurtainItem, items: ICurtainItem[]) => {
  const itemIndex = items.findIndex(i => i.id === item.id)
  const calculatedPosition = items
    .slice(0, itemIndex)
    .reduce((acc, item) => acc + (item.bounds?.width || 0) , 0)
  return calculatedPosition
}

export const getItemsWidth = (items: ICurtainItem[]): number => (
  items.reduce((acc, i) => acc + (i.bounds?.width || 0), 0)
)

export const fitItemsToSpace = (items: ICurtainItem[], width: number): IItemsInSpace => {
  return items.reduce(
    (acc: IItemsInSpace, item) => {
      const currentItemsWidth = getItemsWidth(acc.in)
      const itemFits = currentItemsWidth + (item.bounds?.width || 0) <= width
      return itemFits ?
        ({ ...acc, in: [...acc.in, item ]}) :
        ({ ...acc, out: [...acc.out, item ]})
    }, { in: [], out: []}
  )
}

export const curtainItemsInSpace = (items: ICurtainItem[], containerWidth: number): ICurtainItemsInSpace => {
  const normalItems = items.filter(i => !i.essential)
  const essentialItems = items.filter(i => i.essential)
  const essentialItemsTotalWidth = getItemsWidth(essentialItems)
  const spaceForNormalItems = containerWidth - essentialItemsTotalWidth
  const normalItemsInSpace = fitItemsToSpace(normalItems, spaceForNormalItems)
  return ({ ...normalItemsInSpace, essential: essentialItems })
}
