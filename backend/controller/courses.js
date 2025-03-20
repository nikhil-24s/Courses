const courseModel = require('../models/courses')
const cloudinary = require('../config/cloudinary');


const addCourse = async (req,res)=>{
   try {
    const {courseName, courseDesc, coursePrice} = req.body;
    let imageUrl = "";

    if (req.file) {
        const result = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'courses' }, // Optional folder name
            (error, result) => (error ? reject(error) : resolve(result))
          );
          uploadStream.end(req.file.buffer);
        });
        imageUrl = result.secure_url;
      }

    const course = courseModel({
        courseName,
        courseDesc,
        coursePrice,
        image: imageUrl
    })
    await course.save();

    res.json({status: true, message: 'Course Added Successfully'});
   } catch (error) {
    console.log(error);
    
    res.json({status: false, message: 'Failed To Add Course', error});
   }
}
const allCourses = async (req,res)=>{
   try {
    const courses = await courseModel.find({});
    res.json({status: true, courses});
   } catch (error) {
    res.json({status: false, message: 'Failed To Get Course', error});
   }
}
const getCourse = async (req,res)=>{
    const {id} = req.body
   try {
    const course = await courseModel.findOne({_id: id});
    res.json({status: true, course});
   } catch (error) {
    res.json({status: false, message: 'Failed To Get Course', error});
   }
}
const updateCourse = async (req,res)=>{
    const {courseName, courseDesc, coursePrice , id} = req.body
   try {
    const course = await courseModel.findOneAndUpdate({_id: id},{courseName, courseDesc, coursePrice});
    res.json({status: true, message: 'Course Update Successfully'});
   } catch (error) {
    res.json({status: false, message: 'Failed To Update Course', error});
   }
}
const deleteCourse = async (req,res)=>{
    const {id} = req.body
   try {
    const course = await courseModel.findOneAndDelete({_id: id});
    res.json({status: true, message: 'Course Delete Successfully'});
   } catch (error) {
    res.json({status: false, message: 'Failed To Delete Course', error});
   }
}

module.exports = {
    addCourse,
    allCourses,
    getCourse,
    updateCourse,
    deleteCourse
}