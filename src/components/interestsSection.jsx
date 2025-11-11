/* eslint-disable react/prop-types */

const InterestsSection = ({ interestsData, setInterestsData }) => {
    const handleChange = (index, e) => {
        const updatedData = interestsData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry);
        setInterestsData(updatedData);
    };

    const addInterest = () => {
        setInterestsData([...interestsData, { interest: "", category: "Personal" }]);
    };

    const removeInterest = (index) => {
        if (interestsData.length > 1) {
            setInterestsData(interestsData.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Interests & Hobbies</h2>
                </div>
            </div>
            <div className="p-6">
                {interestsData.map((entry, index) => (
                    <div key={index} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">Interest {index + 1}</h3>
                            </div>
                            {interestsData.length > 1 && (
                                <button
                                    onClick={() => removeInterest(index)}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Interest/Hobby
                                </label>
                                <input 
                                    type="text" 
                                    name="interest" 
                                    value={entry.interest || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="e.g., Photography, Reading, Traveling"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>
                                <select 
                                    name="category" 
                                    value={entry.category || "Personal"} 
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors duration-200 bg-white"
                                >
                                    <option value="Personal">Personal</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Creative">Creative</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Social">Social</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
                <button 
                    onClick={addInterest}
                    className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    Add Another Interest
                </button>
            </div>
        </div>
    );
};

export default InterestsSection;
