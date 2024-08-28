import React, { useState, useRef, useEffect } from 'react';

const SemesterInput = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState(value || '');
    const dropdownRef = useRef(null);
    const romanNumerals = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSemesterSelect = (semester) => {
        const selectedIndex = romanNumerals.indexOf(semester.split(' ')[1]);
        const selectedSemester = selectedIndex !== -1 ? selectedIndex + 1 : null;
        setSelectedSemester(`Sem ${romanNumerals[selectedIndex]}`);
        setIsOpen(false);
        onChange(selectedSemester);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative max-w-[50vw]">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
                Semester
            </label>
            <input
                type="text"
                id='semester'
                name='semester'
                value={selectedSemester}
                onClick={toggleDropdown}
                readOnly
                placeholder="Select semester."
                className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />


            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute z-0 bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-32 overflow-y-auto w-full"
                >
                    {romanNumerals.slice(0, 8).map((numeral, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSemesterSelect(`Sem ${numeral}`)}
                        >
                            Sem {numeral}
                        </div>



                    ))}
                </div>
            )}
        </div>
    );
};

export default SemesterInput;