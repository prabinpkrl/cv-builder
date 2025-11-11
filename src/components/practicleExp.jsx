/* eslint-disable react/prop-types */

const PracticalExperience = ({ practicleData, setPracticleData }) => {
    const handleData = (index, e) => {
        const updatedData = practicleData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry
        );
        setPracticleData(updatedData);
    };

    const addPracticelExp = () => {
        setPracticleData([...practicleData, {
            companyName: "",
            positionTitle: "",
            mainResponsibilities: "",
            dateFrom: "",
            dateUntil: "",
        }])
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Work Experience</h2>
                </div>
            </div>
            <div className="p-6">
                {practicleData.map((entry, index) => (
                    <div key={index} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-2">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">Experience Entry {index + 1}</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input 
                                    type="text" 
                                    name="companyName" 
                                    value={entry.companyName} 
                                    onChange={(e) => handleData(index, e)}
                                    placeholder="e.g., Google, Microsoft, Apple"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Job Title/Position
                                </label>
                                <input 
                                    type="text" 
                                    name="positionTitle" 
                                    value={entry.positionTitle} 
                                    onChange={(e) => handleData(index, e)}
                                    placeholder="e.g., Senior Software Engineer, Product Manager"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Start Date
                                    </label>
                                    <input 
                                        type="date" 
                                        name="dateFrom" 
                                        value={entry.dateFrom} 
                                        onChange={(e) => handleData(index, e)}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        End Date
                                    </label>
                                    <input 
                                        type="date" 
                                        name="dateUntil" 
                                        value={entry.dateUntil} 
                                        onChange={(e) => handleData(index, e)}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Key Responsibilities & Achievements
                                </label>
                                <textarea 
                                    name="mainResponsibilities" 
                                    placeholder="Describe your main responsibilities, achievements, and impact in this role..."
                                    value={entry.mainResponsibilities} 
                                    onChange={(e) => handleData(index, e)}
                                    rows="4"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white resize-y"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button 
                    onClick={addPracticelExp}
                    className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    Add Another Work Experience
                </button>
            </div>
        </div>
    );
};

export default PracticalExperience;



