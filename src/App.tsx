import 'styles/index.scss'
import { CromulentContext } from 'components/Elements/CromulentContext/CromulentContext'
import { CromulentHeader } from 'components/Elements/CromulentHeader/CromulentHeader'
import { MainFilters } from 'components/Elements/MainFilters/MainFilters'
import { Table } from 'components/Elements/Table/Table'
import { useReducer } from 'react'
import { cromulentReducer, initialState } from 'store/cromulentReducer'

export const App = () => {
  const [ appState, dispatch ] = useReducer(cromulentReducer, initialState)

  return (
    <CromulentContext value={{appState, dispatch}}>
      <div className="cromulentWhosHiring">
        <CromulentHeader />
        <MainFilters />
        <hr />
        <Table />
      </div>
    </CromulentContext>
  )
}
