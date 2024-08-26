import React from 'react'
import CourseInstanceInput from './CourseInstanceInput'
import CourseInput from './CourseInput'

const Header = () => {
  return (
    <div className='mt-5'>
      <div className="container mx-auto  text-center text-[#272626]">
        <h1 className="text-5xl font-bold ">Courses and Courselist!</h1>
        <p className="mt-2 mb-2  text-2xl">
          Explore the details of all available courses and course instances.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center lg:gap-44 p-4 gap-4">
        <CourseInput />
        <CourseInstanceInput />
      </div>

    </div>
  )
}
export default Header