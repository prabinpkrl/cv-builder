/* eslint-disable react/prop-types */
// import { useState } from "react";

const GeneralInfo = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-blue-50 p-6 border-b border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">CV Builder</h1>
                <p className="text-gray-600 text-center text-sm">Create your professional resume</p>
            </div>
            <div className="p-6">
                <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">👤</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                </div>
                <form className="space-y-4">
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Professional Role
                        </label>
                        <input 
                            type="text" 
                            name="role" 
                            onChange={handleChange}
                            placeholder="e.g., Software Developer, Marketing Manager"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            onChange={handleChange}
                            placeholder="+977 980000000"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GeneralInfo;
