import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { MyAuth } from "./Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

interface FormData {
    email: string
    password: string
    confirmPassword: string
}

const SignUpForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>()
    const navigate = useNavigate()

    const formSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(MyAuth, data.email, data.password)
            console.log("User registered: ", userCredential.user)
            navigate('/dashboard')
            // Handle successful sign-in (e.g., redirect, display message, etc.)
        } catch (error) {
            console.error("Error registering: ", error)
            // Handle sign-in error (e.g., display error message to user)
        }
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                            value === watch("password") || "Passwords do not match"
                    })}
                />
                {errors.confirmPassword && (
                    <span>{errors.confirmPassword.message}</span>
                )}
            </div>

            <button type="submit">Register</button>
            <Link to="/signin">Already have an account? Sign In</Link>

        </form>
    )
}

export default SignUpForm