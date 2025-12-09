import { CromulentHeader } from 'components/Elements/CromulentHeader/CromulentHeader'
import { MainFilters } from 'components/Elements/MainFilters/MainFilters'
import { Table } from 'components/Elements/Table/Table'
import 'styles/index.scss'

export const App = () => {
  return (
    <div className="cromulentWhosHiring">
      <CromulentHeader />
      <MainFilters />
      <hr />
      <Table />
    </div>
  )
}
