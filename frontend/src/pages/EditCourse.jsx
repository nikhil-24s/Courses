import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseContext from '../context/CourseContext';

const EditCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const { getCourse, updateCourse } = useContext(CourseContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchCourse = async () => {
            const course = await getCourse(id);
            if (course) {
                setCourseName(course.courseName);
                setCourseDesc(course.courseDesc);
                setCoursePrice(course.coursePrice);
            }
        };
        if (id) {
            fetchCourse();
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCourse(courseName, courseDesc, coursePrice,id, navigate);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Edit Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Course Name</label>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter course name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Course Description</label>
                        <input
                            type="text"
                            value={courseDesc}
                            onChange={(e) => setCourseDesc(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                            placeholder="Enter course desc.."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Course Price</label>
                        <input
                            type="number"
                            value={coursePrice}
                            onChange={(e) => setCoursePrice(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                            placeholder="Enter course price"
                        />
                    </div>
                    <input
                        type="submit"
                        className="w-full bg-yellow-600 text-white cursor-pointer p-2 rounded"
                        value="Update Course"
                    />
                </form>
            </div>
        </div>
    );
};

export default EditCourse;
