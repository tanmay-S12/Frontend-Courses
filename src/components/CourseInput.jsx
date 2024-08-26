// import React from 'react'
// import { useState } from 'react';

// const CourseInput = () => {

//     const [courseData, setCourseData] = useState({
//         title: '',
//         code: '',
//         description: ''
//     });

//     const handleInputChange = (e) => {
//         setCourseData({
//             ...courseData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8080/api/courses', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(courseData)
//             });

//             const data = await response.json();
//             console.log('Course created:', data);
//             setCourseData({
//                 title: '',
//                 code: '',
//                 description: ''
//             });
//         } catch (error) {
//             console.error('Error creating course:', error);
//         }
//     };


//     return (
//         <div>
//             <div className='sm:w-80 w-72 h-70'>

//                 <div>
//                     <form className="w-full border-2 shadow-md max-w-sm py-4 px-6 bg-white rounded-lg ">

//                         <div className="text-center">
//                             <h2 className="text-xl font-bold mb-4" id='h2'>Course Details</h2>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
//                                 Course Title
//                             </label>
//                             <input
//                                 className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
//                                 id="input1"
//                                 type="text"
//                                 placeholder="Eg. Computer Architecture"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
//                                 Course Code
//                             </label>
//                             <input
//                                 className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
//                                 id="input2"
//                                 type="text"
//                                 placeholder="Eg. CS 102"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">
//                                 Course Description :
//                             </label>
//                             <textarea
//                                 className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 resize-none"
//                                 id="input3"
//                                 placeholder="Enter description"
//                                 rows="2"
//                                 onChange={handleInputChange}
//                             ></textarea>
//                         </div>

//                         <div className="flex justify-center mt-4">

//                             <button
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 type="submit"
//                                 id='addCourse'
//                                 onSubmit={handleSubmit}
//                             >
//                                 Add Course!
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CourseInput

import React, { useState } from 'react';

const CourseInput = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        code: '',
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
                body: JSON.stringify(courseData)
            });

            const data = await response.json();
            console.log('Course created:', data);
            setCourseData({
                title: '',
                code: '',
                description: ''
            });
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div>
            <div className='sm:w-80 w-72 h-70'>
                <div>
                    <form className="w-full border-2 shadow-md max-w-sm py-4 px-6 bg-white rounded-lg" onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-4" id='h2'>Course Details</h2>
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
                                name="code"
                                type="text"
                                placeholder="Eg. CS 102"
                                value={courseData.code}
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