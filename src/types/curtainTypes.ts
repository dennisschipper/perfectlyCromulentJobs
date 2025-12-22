import type { ReactNode } from "react";
import type { RectReadOnly } from "react-use-measure";

export interface ICurtainItem { 
  id: string,
  content: ReactNode
  bounds?: RectReadOnly
  essential?: boolean
}

export interface IItemsInSpace { 
  in: ICurtainItem[],
  out: ICurtainItem[] 
}

export interface ICurtainItemsInSpace extends IItemsInSpace {
  essential: ICurtainItem[]
}
