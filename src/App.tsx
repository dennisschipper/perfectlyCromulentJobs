import { CromulentHeader } from 'components/Elements/CromulentHeader/CromulentHeader'
import { MainFilters } from 'components/Elements/MainFilters/MainFilters'
import 'styles/index.scss'

export const App = () => {
  return (
    <div className="cromulentWhosHiring">
      <CromulentHeader />
      <MainFilters />
      <hr />
    </div>
  )
}
