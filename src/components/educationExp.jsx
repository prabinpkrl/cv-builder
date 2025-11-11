/* eslint-disable react/prop-types */
// import { useState } from "react";

const EducationalExperience = ({ educationData, setEducationData }) => {
    const handleChange = (index, e) => {
        const updatedData = educationData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry);
        setEducationData(updatedData);
    };

    const addEducation = () => {
        setEducationData([...educationData, { school: "", title: "", date: "" }]);
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Educational Experience</h2>
                </div>
            </div>
            <div className="p-6">
                {educationData.map((entry, index) => (
                    <div key={index} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">Education Entry {index + 1}</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    School/University Name
                                </label>
                                <input 
                                    type="text" 
                                    name="school" 
                                    value={entry.school || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="e.g., Harvard University, MIT"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Degree/Program Title
                                </label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    value={entry.title || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="e.g., Bachelor of Computer Science, MBA"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Graduation Date
                                </label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    value={entry.date || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button 
                    onClick={addEducation}
                    className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    Add Another Education Entry
                </button>
            </div>
        </div>
    );
};
export default EducationalExperience;

