import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom' 
import {useNavigate} from 'react-router-dom'
import CourseContext from '../context/CourseContext'

const AddCourse = () => {
    const [courseName, setCourseName] = useState('')
    const [courseDesc, setCourseDesc] = useState('')
    const [coursePrice, setCoursePrice] = useState('')
    const [courseImage, setCourseImage] = useState(null)
    const {addCourse} = useContext(CourseContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(courseImage);
        
        addCourse(courseName, courseDesc, coursePrice, courseImage, navigate);
    }

    const handleImageChange = (e) => {
        setCourseImage(e.target.files[0]);
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Add Course</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Course Name</label>
                            <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter course name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Course Description</label>
                            <input type="text" value={courseDesc} onChange={(e) => setCourseDesc(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter course description" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Course Price</label>
                            <input type="number" value={coursePrice} onChange={(e) => setCoursePrice(e.target.value)} required className="w-full p-2 border rounded" placeholder="Enter course price" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Course Image</label>
                            <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded" accept="image/*" required />
                        </div>
                        <input type='submit' className="w-full bg-purple-600 text-white cursor-pointer p-2 rounded" value='Add Course' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCourse
