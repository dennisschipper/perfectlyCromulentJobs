// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CromulentWrapper } from 'components/Elements/CromulentWrapper/CromulentWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <CromulentWrapper />
  // </StrictMode>,
)
