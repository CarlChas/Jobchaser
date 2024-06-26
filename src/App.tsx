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
// import { useTheme } from './components/NightMode'
import ThemeToggleButton from './components/ThemeButton'

const App: React.FC = () => {
  return (
    <div>
      <ThemeToggleButton />
      <h1 style={{ textAlign: 'center' }}>Welcome to Jobchaser</h1>
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
    </div>
  )
}

export default App