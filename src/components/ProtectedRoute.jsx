import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const ProtectedRoute = () => {
    const { currentUser } = useAuth()
    console.log("Current User in ProtectedRoute:", currentUser)
    return currentUser ? <Outlet /> : <Navigate to="/signin" replace />
}

export default ProtectedRoute