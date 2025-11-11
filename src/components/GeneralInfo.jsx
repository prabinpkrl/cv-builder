/* eslint-disable react/prop-types */
// import { useState } from "react";

const GeneralInfo = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-2xl mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
            <h1 className="text-center text-4xl font-sans text-gray-800 mb-6">CV Builder</h1>
            <form className="flex flex-col">
                <section>
                    <h2 className="font-sans text-gray-800 text-xl mb-4">General Information</h2>
                    <label className="block mb-2.5 font-bold">
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            onChange={handleChange}
                            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                        />
                    </label>
                    <label className="block mb-2.5 font-bold">
                        Your Role:
                        <input 
                            type="text" 
                            name="role" 
                            onChange={handleChange}
                            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                        />
                    </label>
                    <label className="block mb-2.5 font-bold">
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            onChange={handleChange}
                            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                        />
                    </label>
                    <label className="block mb-2.5 font-bold">
                        Phone:
                        <input 
                            type="tel" 
                            name="phone" 
                            onChange={handleChange}
                            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                        />
                    </label>
                </section>
            </form>
        </div>
    );
};

export default GeneralInfo;
