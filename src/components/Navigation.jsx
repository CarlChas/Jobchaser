import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../AuthContext"

function Navigation() {
    const { currentUser } = useAuth

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {currentUser ? (
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                ) : (
                    <li>
                        < Link to="/signin">Sign In</Link>
                    </li>
                )}
                <li>
                    <button onClick={logOut}>Sign Out</button>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation