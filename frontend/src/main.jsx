import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
