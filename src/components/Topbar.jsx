import React from 'react'

const Topbar = () => {
    return (
        <div className='sticky top-0 bg-white'>
            <div className='w-full shadow-md py-2 flex justify-start'>
                <img className='w-20 mx-4 my-auto' src="/iitblogo.png" alt="IIT Bombay" />
                <h1 className='text-4xl font-bold my-auto text-[#272626] '>IIT Bombay</h1>
            </div>
        </div>
    )
}

export default Topbar