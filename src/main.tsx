import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App.tsx'
import './index.css'
import { Navigator } from './intraestructure/navigation/Navigator.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </React.StrictMode>,
)
