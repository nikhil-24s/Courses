import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseContext from '../context/CourseContext'
import AuthContext from '../context/AuthContext'

const CourseCard = ({ course }) => {
    const { deleteCourse } = useContext(CourseContext)
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="bg-gray-100 p-4 rounded shadow w-64">
                <img src={course.image}/>
                <h3 className="text-xl font-semibold">{course.courseName}</h3>
                <p className="text-gray-600">{course.courseDesc}</p>
                <p className="text-purple-600 font-bold mt-2">{course.coursePrice}</p>
                {user.role === 'Admin' &&
                    <div className="mt-2 flex gap-2">
                        <Link to={`/edit-course/${course._id}`} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</Link>
                        <button onClick={() => { deleteCourse(course._id) }} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </div>
                }
            </div>
        </>
    )
}

export default CourseCard