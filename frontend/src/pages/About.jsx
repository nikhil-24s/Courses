import React from 'react'

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-center">

      <section className="p-8 bg-gray-200 min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-purple-600">About Us</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We are a company dedicated to providing top-notch services and solutions.
          Our mission is to help businesses and individuals achieve their goals 
          with our expertise and innovative approach.
        </p>
      </section>

      <section className="p-8 bg-white min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-purple-600">Meet Our Team</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <div className="bg-white p-4 rounded shadow-xl w-64">
            <h3 className="text-xl font-semibold">Nikhil</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-4 rounded shadow-xl w-64">
            <h3 className="text-xl font-semibold">??</h3>
            <p className="text-gray-600">🤔??</p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="p-8 bg-gray-200 min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-purple-600">Our Mission</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          We strive to bring the best solutions to our customers by leveraging 
          technology and innovation. Our goal is to build long-term relationships 
          and provide exceptional services.
        </p>
      </section>

    </div>
    </>
  )
}

export default About