import React from 'react'
import CourseInstanceInput from './CourseInstanceInput'
import CourseInput from './CourseInput'

const Header = () => {
  return (
    <div>

      <div className='w-full shadow-md py-2 flex justify-start '>
        <img className='w-20 mx-4 my-auto' src=".\public\iitblogo.png" alt="IIT Bombay" />
        {/* <h1 className='text-2xl font-bold my-auto '>Indian Institute of Technology Bombay</h1> */}
        <h1 className='text-4xl font-bold my-auto '>IIT Bombay</h1>
      </div>

      <div className="container mx-auto my-5 text-center">
        <h1 className="text-5xl font-bold">Courses and Courselist!</h1>
        <p className="mt-2  text-2xl">
          Explore the details of all available courses and course instances.
        </p>
      </div>
      <div className="w-full flex justify-around p-4">
        <CourseInput />
        <CourseInstanceInput />
      </div>


    </div>
  )
}
export default Header