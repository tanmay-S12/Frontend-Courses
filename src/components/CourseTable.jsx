
import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';

const CourseTable = () => {

    const [initialData, setInitialData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


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


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/courses/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Item deleted successfully!');
                window.location.reload();
            } else {
                alert('Failed to delete the item.');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('An error occurred while deleting the item.');
        }
    };

    const handleViewDetails = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };






    return (
        <div className='border-2 my-10 shadow-md '>
            <h2 className="text-4xl text-center font-bold mb-5 text-[#272626]">Course List</h2>
            <div className="p-6 w-3/4 mx-auto bg-white rounded-lg shadow-md border-2 border-gray-900">
                {/* Table */}
                <div className='border-2 border-gray-200 overflow-y-auto h-[40vh] rounded-lg '>
                    <table className="bg-white w-full">
                        <thead className=''>
                            <tr className='bg-slate-200 '>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Title</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Course Code</th>
                                <th className="py-2 px-4 border-l border-b border-gray-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {initialData.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.title}</td>

                                    <td className="py-2 px-4 border-l border-b border-gray-300">{item.courseCode}</td>
                                    <td className="py-2 px-4 border-l border-b border-gray-300 flex justify-around">
                                        <button className="text-blue-500 hover:text-blue-700 font-medium"
                                            onClick={() => handleViewDetails(item)}>
                                            View Details</button>
                                        <button className="ml-4 text-red-500 hover:text-red-700 font-medium"
                                            onClick={() => handleDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen &&
                <Modal
                    item={selectedItem}
                    onClose={() => setIsModalOpen(false)}
                />
            }
        </div>
    );
};

export default CourseTable;

