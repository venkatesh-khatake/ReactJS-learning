import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Com from './com.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Com/>
  </StrictMode>,
)
