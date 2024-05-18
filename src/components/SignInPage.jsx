import SignInForm from "./SignInForm"

function SignInPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default SignInPage