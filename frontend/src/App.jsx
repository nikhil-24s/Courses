import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import AddCourse from './pages/AddCourse'
import EditCourse from './pages/EditCourse'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/add-course' element={<AddCourse/>} />
      <Route path='/edit-course/:id' element={<EditCourse/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App