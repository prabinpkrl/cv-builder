/* eslint-disable react/prop-types */
import { useState } from "react";

const GeneralInfo = ({ formData, setFormData }) => {
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        const newErrors = { ...errors };
        
        switch (name) {
            case 'name':
                if (!value || value.trim().length < 2) {
                    newErrors.name = 'Name must be at least 2 characters long';
                } else {
                    delete newErrors.name;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'Please enter a valid email address';
                } else {
                    delete newErrors.email;
                }
                break;
            case 'phone':
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (!value) {
                    newErrors.phone = 'Phone number is required';
                } else if (!phoneRegex.test(value)) {
                    newErrors.phone = 'Please enter a valid phone number';
                } else {
                    delete newErrors.phone;
                }
                break;
            case 'role':
                if (!value || value.trim().length < 2) {
                    newErrors.role = 'Professional role is required';
                } else {
                    delete newErrors.role;
                }
                break;
        }
        
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-blue-50 p-6 border-b border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">CV Builder</h1>
                <p className="text-gray-600 text-center text-sm">Create your professional resume</p>
            </div>
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Personal Information</h2>
                </div>
                <form className="space-y-4">
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name || ""}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white ${
                                errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Professional Role *
                        </label>
                        <input 
                            type="text" 
                            name="role" 
                            value={formData.role || ""}
                            onChange={handleChange}
                            placeholder="e.g., Software Developer, Marketing Manager"
                            required
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white ${
                                errors.role ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                            }`}
                        />
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email || ""}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white ${
                                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone || ""}
                            onChange={handleChange}
                            placeholder="+977 980000000"
                            required
                            className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-gray-50 focus:bg-white ${
                                errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                            }`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GeneralInfo;
