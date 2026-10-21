import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import './css/layout.css'
import './css/form.css'
import './css/resume.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
