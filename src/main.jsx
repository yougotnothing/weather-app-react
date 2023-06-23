import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Home from './home/screens/components/home'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
)
