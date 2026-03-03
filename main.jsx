import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HooksGST from './HooksGST.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksGST/>
  </StrictMode>,
)
