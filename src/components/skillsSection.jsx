/* eslint-disable react/prop-types */

const SkillsSection = ({ skillsData, setSkillsData }) => {
    const handleChange = (index, e) => {
        const updatedData = skillsData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry);
        setSkillsData(updatedData);
    };

    const addSkill = () => {
        setSkillsData([...skillsData, { skillName: "" }]);
    };

    const removeSkill = (index) => {
        if (skillsData.length > 1) {
            setSkillsData(skillsData.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Skills & Expertise</h2>
                </div>
            </div>
            <div className="p-6">
                {skillsData.map((entry, index) => (
                    <div key={index} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">Skill {index + 1}</h3>
                            </div>
                            {skillsData.length > 1 && (
                                <button
                                    onClick={() => removeSkill(index)}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Skill Name *
                            </label>
                            <input 
                                type="text" 
                                name="skillName" 
                                value={entry.skillName || ""} 
                                onChange={(e) => handleChange(index, e)}
                                placeholder="e.g., JavaScript, Project Management, Photoshop"
                                required
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white"
                            />
                        </div>
                    </div>
                ))}
                <button 
                    onClick={addSkill}
                    className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    Add Another Skill
                </button>
            </div>
        </div>
    );
};

export default SkillsSection;
