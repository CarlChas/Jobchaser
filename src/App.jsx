import './App.css'
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import SignInPage from './components/SignInPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import HomePage from './components/HomePage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signin' element={<SignInPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App