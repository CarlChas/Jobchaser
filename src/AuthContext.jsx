import React, { createContext, useContext, useEffect, useState } from "react"
import { MyAuth } from "./components/Firebase"
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "firebase/auth"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const setAuthPersistence = async () => {
            try {
                await setPersistence(MyAuth, browserLocalPersistence)
                console.log("Persistence = local")
                const unSub = onAuthStateChanged(MyAuth, (user) => {
                    console.log("Auth state changed, user:", user)
                    setCurrentUser(user)
                })
                return unSub
            } catch (error) {
                console.error("Error setting persistence:", error)
            }
        }

        setAuthPersistence()
    }, [])

    const logOut = () => {
        signOut(MyAuth)
    }

    const myVal = {
        currentUser,
        setCurrentUser,
        logOut,
    }

    return <AuthContext.Provider value={myVal}>{children}</AuthContext.Provider>
}