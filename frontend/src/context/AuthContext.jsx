import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [user, setUser] = useState({ role: 'Guest' })
    const success = (msg) => {
        toast.success(msg);
    }
    const error = (msg) => {
        toast.error(msg);
    }
    
    const register = async (username, email, password, navigate)=>{
        const res = await axios.post('http://localhost:3000/api/register',{username, email, password});
        if(res.data.status){
            success(res.data.message)
            navigate('/login')
        }else{
            error(res.data.message)
        }
    }
    const login = async (email, password, navigate)=>{
        const res = await axios.post('http://localhost:3000/api/login',{email, password}, { withCredentials: true });
        if(res.data.status){
            success(res.data.message)
            setIsAuthorized(true)
            authUser()
            navigate('/')
        }else{
            error(res.data.message)
        }
    }
    const logout = async (navigate)=>{
        const res = await axios.post('http://localhost:3000/api/logout',{},{ withCredentials: true });
        if(res.data.status){
            success(res.data.message)
            setIsAuthorized(false)
            setUser({ role: 'Guest' })
            navigate('/login')
        }else{
            error(res.data.message)
        }
    }
    const authUser = async ()=>{
        const res = await axios.post('http://localhost:3000/api/authUser',{},{ withCredentials: true });
        if (res.data.status) {
            setIsAuthorized(true);
            setUser(res.data.user); 
        } else {
            setIsAuthorized(false);
            setUser({ role: 'Guest' }); 
        }
    }
    useEffect(() => {
      authUser()
    }, [])
    
  return (
    <AuthContext.Provider value={{register, login ,logout, isAuthorized, user}}>
        <ToastContainer />
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext