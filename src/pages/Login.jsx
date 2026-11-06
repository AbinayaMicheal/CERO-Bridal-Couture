import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import backgroundImage from '../assets/images/login6.jpg'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

   async function handleLogin(event) {
    event.preventDefault()

    setError('')

    if (email === '') {
        setError('Please enter your email')
        return
    }

    if (password === '') {
        setError('Please enter your password')
        return
    }

    if (!email.includes('@')) {
        setError('Please enter a valid email')
        return
    }

    if (password.length < 6) {
        setError('Password must be at least 6 characters')
        return
    }

   try {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    )

    const user = userCredential.user

    // Get Firebase token
    const token = await user.getIdToken()

    // Save or check user profile in MongoDB
    await axios.post(
        `${import.meta.env.VITE_API_URL}/users/create`,
        {
            name: user.displayName || email.split('@')[0]
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    navigate('/home')
}

    catch (error) {
        if (error.code === 'auth/invalid-credential') {
            setError('Invalid email or password')
        } else if (error.code === 'auth/user-not-found') {
            setError('User not found. Please signup first.')
        } else if (error.code === 'auth/wrong-password') {
            setError('Incorrect password')
        } else {
            setError(error.message)
        }
    }
}


    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat  flex items-center justify-center p-5"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: ' center 10%'
            }}
        >
            <div className="w-full max-w-md bg-[#FFFDFC] rounded-2xl p-8 md:mr-20 lg:mr-60  ml-auto">

                <div className="mb-6">
                    <h1 className="font-serif text-3xl font-semibold text-[#382522]">
                        Welcome Back
                    </h1>

                    <p className="text-[#8B7B76] mt-2">
                        Sign in to continue your bridal journey
                    </p>
                </div>


                <div className="mb-4">
                    <p className="text-[#382522] mb-2">
                        Email Address
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>


                <div className="mb-4">
                    <p className="text-[#382522] mb-2">
                        Password
                    </p>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full border border-[#E9DDD6] rounded-lg p-3 outline-none"
                    />
                </div>


                <div className="flex justify-between items-center mb-5 text-sm">

                    <label className="flex items-center gap-2 text-[#8B7B76]">
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <p className="text-[#805255] cursor-pointer">
                        Forgot Password?
                    </p>

                </div>

                {error && (
                    <p className="text-red-600 text-sm mb-4">
                        {error}
                    </p>
                )}


                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-[#98676A] hover:bg-[#805255] text-white py-3 rounded-full"
                >
                    Login →
                </button>

                <p className="text-center text-sm text-[#8B7B76] mt-6">
                    Don't have an account?

                    <Link
                        to="/signup"
                        className="ml-2 text-[#805255] font-semibold hover:underline"
                    >
                        Signup
                    </Link>
                </p>

            </div>

        </div>
    )
}

export default Login

