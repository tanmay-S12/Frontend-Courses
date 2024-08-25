import React from 'react'

const MainPage = () => {
    return (
        <>
            <div className="text-3xl font-bold underline" >MainPage</div>

            <div className="flex justify-center bg-white shadow-md border-slate-950 rounded px-8 pt-6 pb-8 mb-4 h-72">
                <div className="w-52 border-slate-950
             max-w-xs ">
                    <form className="">
                        <div className="mb-5">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Course title"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Course code"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Course Description"
                            />
                        </div>

                        <div className="flex  justify-center mt-8">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Add course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainPage