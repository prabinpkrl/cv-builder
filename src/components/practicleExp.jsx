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
        <div className="max-w-2xl mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gray-50 mb-5">
            <section>
                <h2 className="font-sans text-gray-800 text-xl mb-4">Practical Experience</h2>
                {practicleData.map((entry, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white">
                        <label className="block mb-2.5 font-bold">
                            Company Name:
                            <input 
                                type="text" 
                                name="companyName" 
                                value={entry.companyName} 
                                onChange={(e) => handleData(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Position Title:
                            <input 
                                type="text" 
                                name="positionTitle" 
                                value={entry.positionTitle} 
                                onChange={(e) => handleData(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Date From:
                            <input 
                                type="date" 
                                name="dateFrom" 
                                value={entry.dateFrom} 
                                onChange={(e) => handleData(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Date Until:
                            <input 
                                type="date" 
                                name="dateUntil" 
                                value={entry.dateUntil} 
                                onChange={(e) => handleData(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border"
                            />
                        </label>
                        <label className="block mb-2.5 font-bold">
                            Main Responsibilities:
                            <textarea 
                                name="mainResponsibilities" 
                                placeholder="Write Your responsibilities"
                                value={entry.mainResponsibilities} 
                                onChange={(e) => handleData(index, e)}
                                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded box-border h-32 resize-y"
                            />
                        </label>
                    </div>
                ))}
                <button 
                    onClick={addPracticelExp}
                    className="w-full p-2.5 bg-blue-800 text-white border-none rounded cursor-pointer text-lg hover:bg-green-600 transition-colors duration-300"
                >
                    Add More
                </button>
            </section>
        </div>
    );
};

export default PracticalExperience;



