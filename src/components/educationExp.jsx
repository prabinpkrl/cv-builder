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
        <div className="max-w-2xl mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gray-50 mb-5">
            <section>
                <h2 className="font-sans text-gray-800 text-xl mb-4">Educational Experience</h2>
                {educationData.map((entry, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white">
                        <label className="block mb-2.5 font-bold">
                            School Name:
                            <input 
                                type="text" 
                                name="school" 
                                value={entry.school || ""} 
                                onChange={(e) => handleChange(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Title of Study:
                            <input 
                                type="text" 
                                name="title" 
                                value={entry.title || ""} 
                                onChange={(e) => handleChange(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Date of Study:
                            <input 
                                type="date" 
                                name="date" 
                                value={entry.date || ""} 
                                onChange={(e) => handleChange(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                    </div>
                ))}
                <button 
                    onClick={addEducation}
                    className="w-full p-2.5 bg-green-600 text-white border-none rounded cursor-pointer text-lg hover:bg-green-700 transition-colors duration-300"
                >
                    Add more
                </button>
            </section>
        </div>
    );
};
export default EducationalExperience;

