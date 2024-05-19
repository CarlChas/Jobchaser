import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../AuthContext"

function Navigation() {
    const { currentUser, logOut } = useAuth

    return (
        <nav>
            <ul>
                {currentUser ? (
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <button onClick={logOut}>Sign Out</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/signin">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navigation