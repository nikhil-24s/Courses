import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const {logout, isAuthorized, user} = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <nav className='shadow shadow-purple-200 px-4 py-2 flex justify-between items-center'>
        <div className='font-bold text-2xl text-purple-600'>Coursess</div>
        <div className='flex gap-4 text-md font-medium text-gray-500 justify-center items-center'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            {isAuthorized? <div className='flex gap-2'>
              {user.role === 'Admin' && <Link to='/add-course' className='border-2 text-purple-600 border-purple-600 px-3 py-1 rounded'>Add Course</Link>}
              
              <button className='border-2 text-purple-600 cursor-pointer border-purple-600 px-3 py-1 rounded' onClick={()=>{
                logout(navigate)
            }}>Logout ({user.username}) </button>
            </div> : <Link to='/login' className='border-2 text-purple-600 border-purple-600 px-3 py-1 rounded'>Login</Link>  }
            
        </div>
    </nav>
  )
}

export default Navbar