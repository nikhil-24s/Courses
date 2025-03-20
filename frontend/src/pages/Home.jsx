import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <section className="text-center flex flex-col justify-center items-center py-16 min-h-screen bg-purple-600 text-white">
          <h1 className="text-4xl font-bold">Unlock Your Potential – Learn Anytime, Anywhere!</h1>
          <p className="mt-4 text-lg">Join thousands of learners worldwide and gain skills in technology, business, design, and more.</p>
          <Link to="/courses" className="mt-6 inline-block bg-white text-purple-600 px-6 py-2 font-semibold rounded shadow">Explore Courses</Link>
        </section>

        <section className="py-12 px-6 min-h-[60vh] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center mb-6">Featured Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-600">Learn HTML, CSS, JavaScript, and React.</p>
              <Link to="/courses" className="text-purple-600 font-bold">Learn More →</Link>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Digital Marketing</h3>
              <p className="text-gray-600">Master SEO, social media, and content marketing.</p>
              <Link to="/courses" className="text-purple-600 font-bold">Learn More →</Link>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Graphic Design</h3>
              <p className="text-gray-600">Create stunning visuals with Photoshop & Illustrator.</p>
              <Link to="/courses" className="text-purple-600 font-bold">Learn More →</Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-6 text-center min-h-[60vh] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">✅ Expert Instructors</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">✅ Flexible Learning</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">✅ Affordable Pricing</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">✅ Certification</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-purple-600 text-white min-h-[60vh] flex flex-col justify-center items-center ">
          <h2 className="text-2xl font-bold">Start Learning Today!</h2>
          <p className="mt-2">Join us and take the next step in your career.</p>
          <Link to="/register" className="mt-4 inline-block bg-white text-purple-600 px-6 py-2 font-semibold rounded shadow">Join Now</Link>
        </section>
      </div>
    </>
  )
}

export default Home