import { createContext, type Dispatch } from "react";
import type { IAppState, TActionTypes } from "types";

type TCromulentContext = { appState: IAppState, dispatch: Dispatch<TActionTypes>}
export const CromulentContext = createContext<TCromulentContext>(null!)
