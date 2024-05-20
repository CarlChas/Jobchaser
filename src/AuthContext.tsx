import React, { createContext, useContext, useEffect, useState } from "react"
import { MyAuth } from "./components/Firebase"
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence, User } from "firebase/auth"

interface AuthContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    logOut: () => void;
    loading: boolean;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const setAuthPersistence = async () => {
            try {
                await setPersistence(MyAuth, browserLocalPersistence)
                console.log("Persistence = local")
                const unSub = onAuthStateChanged(MyAuth, (user) => {
                    console.log("Auth state changed, user:", user)
                    setCurrentUser(user)
                    setLoading(false)
                })
                return unSub
            } catch (error) {
                console.error("Error setting persistence:", error)
                setLoading(false)
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
        loading
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return <AuthContext.Provider value={myVal}>{children}</AuthContext.Provider>
}