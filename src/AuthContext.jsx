import React, { createContext, useContext, useEffect, useState } from "react"
import { MyAuth } from "./components/Firebase"
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "firebase/auth"
// import { set } from "firebase/database"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        setPersistence(MyAuth, browserLocalPersistence)
            .then(() => {
                const unSub = onAuthStateChanged(MyAuth, (user) => {
                    setCurrentUser(user)
                })
                return unSub
            })
            .catch((error) => {
                console.error("Error setting persistence:", error)
            })
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