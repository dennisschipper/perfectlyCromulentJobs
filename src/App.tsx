import 'styles/index.scss'
import { CromulentContext } from 'components/Elements/CromulentContext/CromulentContext'
import { CromulentHeader } from 'components/Elements/CromulentHeader/CromulentHeader'
import { MainFilters } from 'components/Elements/MainFilters/MainFilters'
import { Table } from 'components/Elements/Table/Table'
import { useEffect, useReducer } from 'react'
import { cromulentReducer } from 'store/cromulentReducer'
import { filterJobs, saveStoreInBrowser } from 'helpers'
import type { IAppState } from 'types'

interface IAppProps {
  initialState: IAppState
}

export const App = (props: IAppProps) => {
  const [ appState, dispatch ] = useReducer(cromulentReducer, props.initialState)
  const jobs = filterJobs(appState.jobs, appState.options.filters)

  useEffect(() => saveStoreInBrowser(appState), [appState])
  
  return (
    <CromulentContext value={{appState, dispatch}}>
      <div className="cromulentWhosHiring">
        <CromulentHeader />
        <MainFilters />
        <hr />
        <Table jobs={jobs} />
      </div>
    </CromulentContext>
  )
}
