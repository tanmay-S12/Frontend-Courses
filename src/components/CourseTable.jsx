// import React, { useState } from 'react';

// const CourseTable = () => {

//     const initialData = [
//     ];


//     const [semesterFilter, setSemesterFilter] = useState('');
//     const [yearFilter, setYearFilter] = useState('');
//     const [filteredData, setFilteredData] = useState(initialData);


//     const handleFilter = () => {
//         let data = initialData;

//         if (semesterFilter) {
//             data = data.filter(item => item.yearSem.includes(semesterFilter));
//         }

//         if (yearFilter) {
//             data = data.filter(item => item.yearSem.includes(yearFilter));
//         }

//         setFilteredData(data);
//     };


//     React.useEffect(() => {
//         handleFilter();
//     }, [semesterFilter, yearFilter]);

//     return (
//         <div className='border-2 border-red-200 my-8 '>
//             <h2 className="text-4xl text-center font-bold mb-4 text-[#272626]">Course List</h2>
//             <div className="p-6 w-3/4 mx-auto   bg-white rounded-lg shadow-md border-2 border-gray-900">



//                 {/* Table */}
//                 <div className='border-2 border-gray-200 overflow-y-auto h-[40vh] rounded-lg'>
//                     <table className=" bg-white w-full">
//                         <thead>
//                             <tr className='bg-slate-200'>
//                                 <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Title</th>
//                                 <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Year-Sem</th>
//                                 <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Code</th>
//                                 <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredData.map((item) => (
//                                 <tr key={item.id}>
//                                     <td className="py-2 px-4 border-l border-b border-gray-300">{item.title}</td>
//                                     <td className="py-2 px-4 border-l border-b border-gray-300">{item.yearSem}</td>
//                                     <td className="py-2 px-4 border-l border-b border-gray-300">{item.code}</td>
//                                     <td className="py-2 px-4 border-l border-b border-gray-300 flex justify-around">
//                                         <button className="text-blue-500 hover:text-blue-700 font-medium">View Details</button>
//                                         <button className="ml-4 text-red-500 hover:text-red-700 font-medium">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseTable;

import React, { useState, useEffect } from 'react';

const CourseTable = () => {

    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/courses'); 
                const data = await response.json();
                setInitialData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    

    return (
        <div className='border-2 border-red-200 my-8'>
            <h2 className="text-4xl text-center font-bold mb-4 text-[#272626]">Course List</h2>
            <div className="p-6 w-3/4 mx-auto bg-white rounded-lg shadow-md border-2 border-gray-900">
                {/* Table */}
                <div className='border-2 border-gray-200 overflow-y-auto h-[40vh] rounded-lg'>
                    <table className="bg-white w-full">
                        <thead>
                            <tr className='bg-slate-200'>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Title</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Code</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialData.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.title}</td>
                                   
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.courseCode}</td>
                                    <td className="py-2 px-4 border-l border-b border-gray-300 flex justify-around">
                                        <button className="text-blue-500 hover:text-blue-700 font-medium">View Details</button>
                                        <button className="ml-4 text-red-500 hover:text-red-700 font-medium">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CourseTable;

