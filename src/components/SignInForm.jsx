import React from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { MyAuth } from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const navigate = useNavigate()

    const formSubmit = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(MyAuth, data.email, data.password)
            console.log("User signed in:", userCredential.user)
            navigate("/dashboard")
        } catch (error) {
            console.error("Error signing in:", error)
        }
    }

    return (
        <>
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

                <button type="submit">Log in</button>
            </form>

            <Link to="/signup">Don't have an account? Sign Up</Link>

        </>
    );
}

export default SignInForm