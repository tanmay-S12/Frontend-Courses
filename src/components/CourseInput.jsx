
import React, { useState } from 'react';

const CourseInput = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        courseCode: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(courseData),


            })

            if (response.ok) {
                const data = await response.json();
                console.log('Course created:', data);
                setCourseData({
                    title: '',
                    courseCode: '',
                    description: ''
                });

                alert("Course Saved Successfully.");
                window.location.reload();
            } else {
                const errorData = await response.json();
                console.error('Error creating course:', errorData);
            }

        } catch (error) {
            console.error('Error creating course from catch:', error)
        }
    };

    return (
        <div>
            <div className='sm:w-80 w-72 h-70'>
                <div>
                    <form className="w-full border-2 shadow-md max-w-sm py-4 px-6 bg-white rounded-lg" onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h2 className="text-xl underline underline-offset-4 font-bold mb-4" id='h2'>Course Details</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseTitle">
                                Course Title
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="courseTitle"
                                name="title"
                                type="text"
                                placeholder="Eg. Computer Architecture"
                                value={courseData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseCode">
                                Course Code
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="courseCode"
                                name="courseCode"
                                type="text"
                                placeholder="Eg. CS 102"
                                value={courseData.courseCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                                Course Description:
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 resize-none"
                                id="courseDescription"
                                name="description"
                                placeholder="Enter description"
                                rows="2"
                                value={courseData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"

                                id='addCourse'
                            >
                                Add Course!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CourseInput;