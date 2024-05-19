import './App.css'
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import SignInPage from './components/SignInPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import HomePage from './components/HomePage.jsx'
import { AuthProvider, useAuth } from './AuthContext'
import Navigation from './components/Navigation.jsx'

function ProtectedRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/signin" replace />
}

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <header>
          <Navigation />
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
    </AuthProvider>
  )
}

export default App