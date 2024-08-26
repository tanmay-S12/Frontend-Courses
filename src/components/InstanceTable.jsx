
import React, { useState, useEffect } from 'react';

const InstanceTable = () => {

    const [semesterFilter, setSemesterFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/allinstances'); 
                const data = await response.json();

                const formattedData = data.map(item => ({
                    ...item,
                    yearSem: `${item.year} - ${item.semester}`
                }));

                setInitialData(formattedData);
                setFilteredData(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchCourseData = async ()=>{
            const res = await fetch('http://localhost:8080/api/'); 
            const coursedata = await res.json();
        }



        fetchData();
    }, []);

    const handleFilter = () => {
        let data = initialData;

        if (semesterFilter) {
            data = data.filter(item => item.yearSem.includes(` - ${semesterFilter}`));
        }

        if (yearFilter) {
            data = data.filter(item => item.yearSem.includes(yearFilter));
        }

        setFilteredData(data);
    };

    useEffect(() => {
        handleFilter();
    }, [semesterFilter, yearFilter, initialData]);

    return (
        <div className='border-2 border-red-200 mt-20 '>
            <h2 className="text-4xl text-center font-bold mb-4 text-[#272626]">Course Instance Table</h2>
            <div className="p-6 w-3/4 mx-auto   bg-white rounded-lg shadow-md border-2 border-gray-900">

                {/* Filters */}
                <div className="flex mb-4">
                    <div className="mr-4">
                        <label className="block  text-base font-bold mb-2" htmlFor="semesterFilter">
                            Filter by Semester
                        </label>
                        <select
                            className="px-3 py-2 border rounded-lg  text-gray-700 focus:outline-none focus:border-blue-500"
                            id="semesterFilter"
                            value={semesterFilter}
                            onChange={(e) => setSemesterFilter(e.target.value)}
                        >
                            <option value="">All Semesters</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[#373535] text-base font-bold mb-2" htmlFor="yearFilter">
                            Filter by Year
                        </label>
                        <input
                            className="px-3 py-2 w-40 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                            id="yearFilter"
                            type="number"
                            placeholder="Enter year"
                            maxLength="4"
                            value={yearFilter}
                            onChange={(e) => setYearFilter(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className='border-2 rounded-lg border-gray-200 overflow-y-auto h-[40vh]'>
                    <table className=" bg-white w-full ">
                        <thead>
                            <tr className='bg-slate-200'>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Title</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Year-Sem</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Code</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.title}</td>
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.yearSem}</td>
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

export default InstanceTable;

