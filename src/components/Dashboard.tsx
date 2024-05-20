import React from "react"
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"

const Dashboard: React.FC = () => {
    const { currentUser, logOut } = useAuth()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
        navigate("/signin")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {currentUser ? (
                <div>
                    <p>Welcome, {currentUser.email}</p>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default Dashboard