import './App.css'
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import SignInPage from './components/SignInPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import HomePage from './components/HomePage.jsx'

function ProtectedRoute() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />
}

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <li>Sign In</li>
          <li>Sign Up</li>
          <button>Sign Out</button>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App