import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import AuthContext  from '../context/AuthContext'; 
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handelSubmit = (e)=>{
        e.preventDefault()
        login(email, password, navigate);
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Login</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter password" />
                        </div>
                        <input type='submit' className="w-full bg-purple-600 text-white cursor-pointer p-2 rounded" value='Login' />
                    </form>
                    <p className="mt-4 text-center">
                        Don't have an account? <Link to="/register" className="text-purple-600">Register</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login