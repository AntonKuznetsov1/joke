import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Full from './Full.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Full />
  </StrictMode>,
)
