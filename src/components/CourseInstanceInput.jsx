import React from 'react'
import SemesterInput from './SemesterInput'
import Year from './Year'

const CourseInstanceInput = () => {
    return (
        <div>
            {/* <div className="flex justify-center items-center min-h-screen"> */}
            <form className="w-full p-4 bg-white rounded-lg shadow-md border-2">

                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Course Instance</h2>
                </div>
            
                {/* Select Course Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectCourse">
                        Select Course
                    </label>
                    <select
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        id="selectCourse"
                    >
                        <option value="" disabled selected>Select a course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                        {/* Add more courses as needed */}
                    </select>
                </div>

                {/* Year Input */}
                {/* <Year /> */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                        Year
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        id="year"
                        type="number"
                        placeholder="Enter year"
                        maxLength="4"
                        min="0000"
                        max="2024"
                        required
                    />
                </div>

                {/* Semester Input v1 */}
                {/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
                        Semester
                    </label>
                    <select
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                        id="semester"
                    >
                        <option value="" disabled selected>Select semester</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VIII">VIII</option>
                    </select>
                </div> */}

                <SemesterInput />


                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create Instance
                    </button>
                </div>
            </form>
        </div>
        // </div>
    )
}

export default CourseInstanceInput