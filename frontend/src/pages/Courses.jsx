import React, { useContext, useEffect } from 'react'
import CourseContext from '../context/CourseContext'
import CourseCard from '../components/CourseCard';
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'

const Courses = () => {
  const { allCourses } = useContext(CourseContext)
  const { isAuthorized } = useContext(AuthContext)

  return (
    <div>
      <section className="p-8 min-h-screen bg-white">
        <h2 className="text-3xl text-center font-bold text-purple-600">Our Courses</h2>
        {isAuthorized? <div className="mt-4 flex flex-wrap justify-center gap-4 ">
          {allCourses.length > 0 ? allCourses.map((course, i) => (
            <CourseCard course={course} key={i}/>
          )) : <h2 className="text-2xl mt-10 text-center text-purple-600">No Courses Available</h2>}
        </div> : <div className=' w-full min-h-[70vh] flex flex-col justify-center items-center gap-3'>
        <p className="text-2xl mt-10 text-center text-red-600">If you want to see courses , you have to login first</p> 
        <Link to='/login' className="bg-purple-600 text-white px-4 py-2 rounded">Login</Link>
        </div>
}
        
      </section>
    </div>
  )
}

export default Courses