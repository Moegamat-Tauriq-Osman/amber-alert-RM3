import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import App from './App.jsx'
import CreateAnAlert from "./CreateAnAlert.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <CreateAnAlert/>
  </StrictMode>,
)
