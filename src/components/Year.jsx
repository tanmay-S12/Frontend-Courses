import React, { useState } from 'react';

const Year = () => {
    const [year, setYear] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 4 && /^[0-9]*$/.test(value)) {
            setYear(value);
        }
    };

    return (
        <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="year">
                Year
            </label>
            <input
                className="w-full px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                id="year"
                type="number"
                placeholder="Enter year"
                value={year}
                onChange={handleChange}
                min="1000"
                max="9999"
                required
            />
        </div>
    );
};

export default Year;
