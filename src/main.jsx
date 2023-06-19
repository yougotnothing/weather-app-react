import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterApp } from './home/routerApp'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
)
