
import React, { useState, useEffect } from 'react';
import { InstanceModal } from './InstanceModal';

const InstanceTable = () => {

    const [semesterFilter, setSemesterFilter] = useState('');
    const [yearFilter, setYearFilter] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [plaindata, setPlainData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);



    useEffect(() => {

        const combinedInstanceData = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/dtogetallinstances')
                // Fetching combined data from server
                const data = await res.json();
                setPlainData(data);
                const formattedData = data.map(item => ({
                    ...item,
                    yearSem: `${item.year} - ${item.semester}`,
                    year: item.year,
                    semester: item.semester
                }));

                setTableData(formattedData);
                setFilteredData(formattedData);
                console.log("Formatted data from combined api", formattedData);
            } catch (error) {
                console.error('Error fetching instance data:', error);
            }
        }
        combinedInstanceData();
    }, [])

    const handleViewDetails = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleDelete = async (year, semester, courseid) => {
        try {
            const res = await fetch(`http://localhost:8080/api/instances/${year}/${semester}/${courseid}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setFilteredData(prevData => prevData.filter(comb => comb.id !== id));
                console.log(`Deleted instance with id: ${courseid}`);
                alert("Instance deleted successfully !");
                window.location.reload();

            } else {
                console.error('Failed to delete instance:', res.statusText);
            }
        } catch (error) {
            console.error('Error deleting instance:', error);
        }
    };



    const handleFilter = () => {
        const filtered = tableData.filter(item => {
            return (
                (!yearFilter || item.year.toString() === yearFilter) &&
                (!semesterFilter || item.semester.toString() === semesterFilter)
            );
        });
        setFilteredData(filtered.length > 0 ? filtered : tableData);
    };


    const handleResetFilter = () => {
        setSemesterFilter('');
        setYearFilter('');
        setFilteredData(tableData);
    }

    return (
        <div className='border-2 mt-20  shadow-md mb-16'>
            <h2 className="text-4xl text-center font-bold mb-5 text-[#272626]">Course Instance Table</h2>
            <div className="p-6 w-3/4 mx-auto bg-white rounded-lg shadow-md border-2 border-gray-900">

                {/* Filters */}
                <div className='flex justify-start gap-6 items-end '>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <label className="block text-base font-bold mb-2" htmlFor="semesterFilter">
                                Filter by Semester
                            </label>
                            <select
                                className="px-3 py-2 border border-black rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
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
                                className="px-3 py-2 w-40 border border-black rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                id="yearFilter"
                                type="number"
                                placeholder="Enter year"
                                maxLength="4"
                                value={yearFilter}
                                name='yearFilter'
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value))
                                        .toString()
                                        .slice(0, 4);
                                }}
                                onChange={(e) => setYearFilter(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mb-4 text-sm ">
                        <button
                            className="px-2 bg-blue-500 h-8 text-white font-semibold rounded-lg hover:bg-blue-700"
                            onClick={handleFilter}
                        >
                            Apply Filter
                        </button>

                        <button
                            className="ml-4 px-2 h-8 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700"
                            onClick={handleResetFilter}
                        >
                            Reset Filter
                        </button>
                    </div>

                </div>

                {/* Table */}
                <div className='border-2 rounded-lg border-gray-200 overflow-y-auto h-[40vh]'>
                    <table className="bg-white w-full">
                        <thead>
                            <tr className='bg-slate-200'>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Title</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Year - Sem</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Code</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((comb) => (
                                <tr key={comb.id}>
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{comb.title}</td>

                                    <td className="py-2 px-4 border-l border-b border-gray-300">{comb.yearSem}</td>

                                    <td className="py-2 px-4 border-l border-b border-gray-300">{comb.courseCode}</td>

                                    <td className="py-2 px-4 border-l border-b border-gray-300 flex justify-around">
                                        <button className="text-blue-500 hover:text-blue-700 font-medium"
                                            onClick={() => handleViewDetails(comb)}
                                        >View Details</button>
                                        <button className="ml-4 text-red-500 hover:text-red-700 font-medium"
                                            onClick={() => handleDelete(comb.year, comb.semester, comb.courseid)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen &&
                <InstanceModal
                    item={selectedItem}
                    onClose={() => setIsModalOpen(false)}
                />
            }
        </div>
    );
};

export default InstanceTable;
