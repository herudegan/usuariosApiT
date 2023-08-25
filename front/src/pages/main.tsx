import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from '../routes.tsx'
import '../css/css.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
)
