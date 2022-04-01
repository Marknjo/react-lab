import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


const appRoot = createRoot(document.getElementById('root')! as HTMLDivElement)

 appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
