import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [allCourses, setAllCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const success = (msg) => {
        toast.success(msg);
    }
    const error = (msg) => {
        toast.error(msg);
    }
    const addCourse = async (courseName, courseDesc, coursePrice,courseImage, navigate) => {
        const formData = new FormData();
        formData.append("courseName", courseName);
        formData.append("courseDesc", courseDesc);
        formData.append("coursePrice", coursePrice);
        formData.append("image", courseImage);
        const res = await axios.post('http://localhost:3000/api/add-course', formData ,{
            headers: { "Content-Type": "multipart/form-data" },
    });
        if (res.data.status) {
            success(res.data.message)
            navigate('/courses')
        } else {
            error(res.data.message)
        }
    }
    const getAllCourses = async () => {
        const res = await axios.get('http://localhost:3000/api/all-course');
        if (res.data.status) {
            setAllCourses(res.data.courses);
            setLoading(false)
        } else {
            error(res.data.message)
        }
    }
    const getCourse = async (id) => {
        const res = await axios.post('http://localhost:3000/api/get-course',{id});
        if (res.data.status) {
            setLoading(false)
            return res.data.course;
            
        } else {
            error(res.data.message)
        }
    }
    const updateCourse = async (courseName, courseDesc, coursePrice,id, navigate) => {
        const res = await axios.post('http://localhost:3000/api/update-course',{courseName, courseDesc, coursePrice,id});
        if(res.data.status){
            success(res.data.message)
            navigate('/courses')
        }else{
            error(res.data.message)
        }
    }
    const deleteCourse = async (id, navigate) => {
        const res = await axios.post('http://localhost:3000/api/delete-course',{id});
        if(res.data.status){
            success(res.data.message)
            navigate('/courses')
        }else{
            error(res.data.message)
        }
    }

    useEffect(() => {
        getAllCourses()
    }, [addCourse])
    useEffect(() => {
        getAllCourses()
    }, [])
    return (
        <CourseContext.Provider value={{ addCourse, allCourses, loading ,getCourse, updateCourse, deleteCourse }}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContext