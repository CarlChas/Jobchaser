import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'
import { AuthProvider } from './AuthContext'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'

const App: React.FC = () => {
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