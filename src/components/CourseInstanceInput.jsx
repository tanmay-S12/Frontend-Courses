import React from 'react'
import { useState, useEffect } from 'react'
import SemesterInput from './SemesterInput'


const CourseInstanceInput = () => {

    const [courses, setCourses] = useState([]);
    const [courseInstance, setCourseInstance] = useState({
        year: '',
        semester: '',
        courseId: ''
    });



    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/courses');
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, []);



    const handleInputChange = (e) => {
        setCourseInstance({
            ...courseInstance,
            [e.target.name]: e.target.value
        });
    };

    const handleSemesterChange = (selectedSemester) => {
        setCourseInstance((prev) => ({
            ...prev,
            semester: selectedSemester
        }));
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const course = courses.find(c => c.title === e.target.selectCourse.value);
            const courseId = course ? course.id : null;


            const instanceData = {
                year: courseInstance.year,
                semester: courseInstance.semester,
                courseId
            };

            const response = await fetch('http://localhost:8080/api/instances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(instanceData)
            });

            const data = await response.json();
            console.log('Course instance created:', data);

            setCourseInstance({
                year: '',
                semester: '',
                courseId: ''
            });
        } catch (error) {
            console.error('Error creating course instance:', error);
        }
    };







    return (
        <div>
            <div className='sm:w-80 w-72'>

                <form className="w-full py-4 px-6  bg-white rounded-lg shadow-md border-2">

                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Course Instance</h2>
                    </div>

                    <div className='flex justify-end'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                            type="reset"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Select Course Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectCourse" onChange={handleInputChange}>
                            Select Course
                        </label>

                        <select
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            id="selectCourse"
                        >
                            <option value="" disabled selected>Select a course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.title}>
                                    {course.title}
                                </option>
                            ))}
                        </select>
                    </div>




                    <SemesterInput
                        value={courseInstance.semester}
                        onChange={handleSemesterChange}
                    />



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                            Year
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            id="year"
                            type="number"

                            onChange={handleInputChange}
                            placeholder="Enter year"
                            onInput={(e) => {
                                e.target.value = Math.max(0, parseInt(e.target.value))
                                    .toString()
                                    .slice(0, 4);
                            }}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onScroll={handleSubmit}
                        >
                            Create Instance
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CourseInstanceInput