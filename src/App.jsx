import { useState } from "react";
import EducationalExperience from "./components/educationExp";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/practicleExp";

function App() {
  const [formData, setFormData] = useState({});
  const [educationData, setEducationData] = useState([{
    school: "",
    title: "",
    date: "",
  }]);
  const [showEducationData, setShowEducationData] = useState(false);
  const [practicleData, setPracticleData] = useState([{
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  }]);
  const [showPracticleData, setShowPracticleData] = useState(false)
  const [submitted, setSubmitted] = useState(false);
  // const [editing, setEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // const handleEdit = () => {
  //   setEditing(true)
  // }

  const handleEduChange = () => {
    setShowEducationData(!showEducationData);
  };
  const handlePracticleChange = () => {
    setShowPracticleData(!showPracticleData);
  };

  return (
    <div className="font-sans bg-red-50 p-5 flex justify-between gap-4 min-h-screen">
      <div className="w-1/2 border border-gray-300 p-5 rounded-lg bg-white shadow-lg">
        <GeneralInfo formData={formData} setFormData={setFormData} />

        <div className="mb-4">
          <button 
            onClick={handleEduChange}
            className="w-full p-2.5 bg-green-600 text-white border-none rounded cursor-pointer text-lg hover:bg-blue-800 transition-colors duration-300"
          >
            {showEducationData ? "Hide" : "Add"} Educational
          </button>
          {showEducationData && (
            <EducationalExperience
              educationData={educationData}
              setEducationData={setEducationData}
            />
          )}
        </div>

        <div className="mb-4">
          <button 
            onClick={handlePracticleChange}
            className="w-full p-2.5 bg-blue-800 text-white border-none rounded cursor-pointer text-lg hover:bg-green-600 transition-colors duration-300 mt-2.5"
          >
            {showPracticleData ? "Hide" : "Show"} Practical
          </button>
          {showPracticleData && (
            <PracticalExperience
              practicleData={practicleData}
              setPracticleData={setPracticleData}
            />
          )}
        </div>

        <div className="mb-4">
          <button 
            onClick={handleSubmit}
            className="w-full p-2.5 bg-blue-600 text-white border-none rounded cursor-pointer text-lg hover:bg-blue-700 transition-colors duration-300 mt-2.5"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="w-1/2 border border-gray-300 p-5 rounded-lg bg-white shadow-lg ml-2.5 border-l-8 border-l-green-500">
        {submitted && (
          <div>
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{formData.name}</h1>
              <p className="text-xl text-gray-600 mb-2 font-medium">{formData.role}</p>
              <p className="text-gray-700 mb-1">{formData.email}</p>
              <p className="text-gray-700">{formData.phone}</p>
            </header>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Educational</h2>
              {educationData.map((entry, index) => (
                <div className="mb-4 p-3 bg-gray-50 rounded border-l-4 border-l-blue-500" key={index}>
                  <h3 className="text-lg font-semibold text-gray-800">{entry.school}</h3>
                  <p className="text-gray-700 font-medium">{entry.title}</p>
                  <p className="text-gray-600 text-sm">{entry.date}</p>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Practical Experience</h2>
              {practicleData.map((entry, index) => (
                <div className="mb-4 p-3 bg-gray-50 rounded border-l-4 border-l-green-500" key={index}>
                  <h3 className="text-lg font-semibold text-gray-800">{entry.companyName}</h3>
                  <p className="text-gray-700 font-medium">Position: {entry.positionTitle}</p>
                  <p className="text-gray-600 text-sm">
                    Date From: {entry.dateFrom} - Date Until: {entry.dateUntil}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Main Responsibilities:</span> {entry.mainResponsibilities}
                  </p>
                </div>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
