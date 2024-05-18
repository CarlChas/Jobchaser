import SignUpForm from "./SignUpForm"

function SignUpPage() {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default SignUpPage