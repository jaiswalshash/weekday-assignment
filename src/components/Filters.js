import React from 'react';

const Filters = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4">
      <div className="flex items-center mr-4 mb-2">
        <input
          type="text"
          placeholder="Roles"
          className="px-2 py-1 border border-gray-300 rounded-md w-40 sm:w-auto"
        />
      </div>
      <div className="flex items-center mr-4 mb-2">
        <input
          type="number"
          placeholder="Number Of Employees"
          className="px-2 py-1 border border-gray-300 rounded-md w-40 sm:w-auto"
        />
      </div>
      <div className="flex items-center mr-4 mb-2">

        <input
          type="text"
          placeholder="Remote"
          className="px-2 py-1 border border-gray-300 rounded-md w-40 sm:w-auto"
        />
      </div>
      <div className="flex items-center mr-4 mb-2">
        <input
          type="text"
          placeholder="Tech Stack"
          className="px-2 py-1 border border-gray-300 rounded-md w-40 sm:w-auto"
        />
      </div>
      <div className="flex items-center mr-4 mb-2">
        <input
          type="number"
          placeholder="Minimum Base Pay Salary"
          className="px-2 py-1 border border-gray-300 rounded-md w-40 sm:w-auto"
        />
      </div>
      <div className="flex-grow mb-2">
        <input
          type="text"
          placeholder="Search Company Name"
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Filters;