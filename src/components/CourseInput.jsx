import React from 'react'

const CourseInput = () => {
    return (
        <div>
            <div className='border-black border-5 shadow-md w-50vw'>
                {/* <div className="flex justify-center items-center min-h-screen m-20px border-slate-950 "> */}
                <div>
                    <form className="w-full shadow-md max-w-sm p-6 bg-white rounded-lg ">
                        {/* <h2 className="text-xl font-bold mb-4">Course Details</h2> */}
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-4">Course Details</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                                Course Title
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="input1"
                                type="text"
                                placeholder="Eg. Computer Architecture"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                                Course Code
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="input1"
                                type="text"
                                placeholder="Eg. CS 102"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Course Description :
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="description"
                                placeholder="Enter description"
                                rows="2"
                            ></textarea>
                        </div>

                        <div className="flex justify-center mt-6">
                            {/* className="flex justify-center mt-6" */}
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
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

export default CourseInput