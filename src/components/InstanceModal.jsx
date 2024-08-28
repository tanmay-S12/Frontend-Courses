import React from 'react'

export const InstanceModal = ({ item, onClose }) => {

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-2">Course Instance Details</h2>

                <p><strong>Title:  </strong> {item.title}</p>
                <p><strong>Course Code:  </strong> {item.courseCode}</p>
                <p><strong>Semester:  </strong>{item.semester}</p>
                <p><strong>Year:  </strong>{item.year}</p>
                <p><strong>Description:  </strong> {item.description}</p>

                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};




