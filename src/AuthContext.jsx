import React, { createContext, useContext, useEffect, useState } from "react"
import { MyAuth } from "./components/Firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unSub = onAuthStateChanged(MyAuth, (user) => {
            setCurrentUser(user)
        })
        return unSub
    }, [])

    const logOut = () => {
        signOut(MyAuth)
    }

    const myVal = {
        currentUser,
        logOut,
    }

    return <AuthContext.Provider value={myVal}>{children}</AuthContext.Provider>
}