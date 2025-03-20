const express = require('express');
const { addCourse, allCourses, getCourse, updateCourse, deleteCourse } = require('../controller/courses');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/add-course', upload.single('image'), addCourse);
router.get('/all-course', allCourses);
router.post('/get-course', getCourse);
router.post('/update-course', updateCourse);
router.post('/delete-course', deleteCourse);

module.exports = router;
