/* eslint-disable react/prop-types */

const AchievementsSection = ({ achievementsData, setAchievementsData }) => {
    const handleChange = (index, e) => {
        const updatedData = achievementsData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry);
        setAchievementsData(updatedData);
    };

    const addAchievement = () => {
        setAchievementsData([...achievementsData, { title: "", description: "", date: "" }]);
    };

    const removeAchievement = (index) => {
        if (achievementsData.length > 1) {
            setAchievementsData(achievementsData.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
            <div className="bg-yellow-50 p-4 border-b border-gray-100">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🏆</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Achievements & Awards</h2>
                </div>
            </div>
            <div className="p-6">
                {achievementsData.map((entry, index) => (
                    <div key={index} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">Achievement {index + 1}</h3>
                            </div>
                            {achievementsData.length > 1 && (
                                <button
                                    onClick={() => removeAchievement(index)}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Achievement Title *
                                </label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    value={entry.title || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="e.g., Employee of the Year, Best Project Award"
                                    required
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea 
                                    name="description" 
                                    value={entry.description || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Describe your achievement and its impact..."
                                    rows="3"
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-200 bg-white resize-y"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Date Received
                                </label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    value={entry.date || ""} 
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors duration-200 bg-white"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button 
                    onClick={addAchievement}
                    className="w-full p-4 bg-yellow-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    <span className="mr-2">➕</span>
                    Add Another Achievement
                </button>
            </div>
        </div>
    );
};

export default AchievementsSection;
