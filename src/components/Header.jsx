import React from 'react'

const Header = () => {
  return (
    <div className='border-black border-5 w-50vw'>
        {/* <div className="flex justify-center items-center min-h-screen m-20px border-slate-950 "> */}
        <div>
      <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Course Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
            Input 1
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            id="input1"
            type="text"
            placeholder="Enter first input"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
            Input 2
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            id="input2"
            type="text"
            placeholder="Enter second input"
          />
        </div>
        <div className="flex items-center justify-between">
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

  )
}

export default Header