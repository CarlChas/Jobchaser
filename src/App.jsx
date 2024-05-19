import './App.css'
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom'
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
          <ul>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <button>Sign Out</button> */}
          </ul>
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