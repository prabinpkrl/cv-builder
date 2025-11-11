import { useState } from "react";
import EducationalExperience from "./components/educationExp";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/practicleExp";
import SkillsSection from "./components/skillsSection";
import AchievementsSection from "./components/achievementsSection";
import InterestsSection from "./components/interestsSection";

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
  const [showPracticleData, setShowPracticleData] = useState(false);
  const [skillsData, setSkillsData] = useState([{ skillName: "" }]);
  const [showSkillsData, setShowSkillsData] = useState(false);
  const [achievementsData, setAchievementsData] = useState([{ title: "", description: "", date: "" }]);
  const [showAchievementsData, setShowAchievementsData] = useState(false);
  const [interestsData, setInterestsData] = useState([{ interest: "", category: "Personal" }]);
  const [showInterestsData, setShowInterestsData] = useState(false);
  const [submitted, setSubmitted] = useState(true); // Always show preview
  // const [editing, setEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove the submit functionality since it's now real-time
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
  const handleSkillsChange = () => {
    setShowSkillsData(!showSkillsData);
  };
  const handleAchievementsChange = () => {
    setShowAchievementsData(!showAchievementsData);
  };
  const handleInterestsChange = () => {
    setShowInterestsData(!showInterestsData);
  };

  return (
    <div className="font-sans bg-red-50 p-5 flex justify-between gap-4 min-h-screen">
      <div className="w-1/2 border border-gray-300 p-5 rounded-lg bg-white shadow-lg">
        <GeneralInfo formData={formData} setFormData={setFormData} />

        <div className="mb-4">
          <button 
            onClick={handleEduChange}
            className="w-full p-4 bg-blue-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span className="mr-2">🎓</span>
            {showEducationData ? "Hide" : "Add"} Educational Experience
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
            className="w-full p-4 bg-green-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span className="mr-2">💼</span>
            {showPracticleData ? "Hide" : "Show"} Work Experience
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
            onClick={handleSkillsChange}
            className="w-full p-4 bg-purple-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-purple-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span className="mr-2">⚡</span>
            {showSkillsData ? "Hide" : "Show"} Skills & Expertise
          </button>
          {showSkillsData && (
            <SkillsSection
              skillsData={skillsData}
              setSkillsData={setSkillsData}
            />
          )}
        </div>

        <div className="mb-4">
          <button 
            onClick={handleAchievementsChange}
            className="w-full p-4 bg-yellow-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span className="mr-2">🏆</span>
            {showAchievementsData ? "Hide" : "Show"} Achievements & Awards
          </button>
          {showAchievementsData && (
            <AchievementsSection
              achievementsData={achievementsData}
              setAchievementsData={setAchievementsData}
            />
          )}
        </div>

        <div className="mb-4">
          <button 
            onClick={handleInterestsChange}
            className="w-full p-4 bg-indigo-500 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span className="mr-2">🎯</span>
            {showInterestsData ? "Hide" : "Show"} Interests & Hobbies
          </button>
          {showInterestsData && (
            <InterestsSection
              interestsData={interestsData}
              setInterestsData={setInterestsData}
            />
          )}
        </div>

      </div>

      <div className="w-1/2 bg-white shadow-2xl ml-2.5 rounded-lg overflow-hidden">
        {submitted && (
          <div className="h-full">
            <header className="bg-blue-600 text-white p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-2 tracking-wide">{formData.name || "Your Name"}</h1>
                <p className="text-xl mb-4 text-blue-100 font-light">{formData.role || "Your Professional Role"}</p>
                <div className="flex flex-col space-y-2 text-blue-100">
                  <div className="flex items-center">
                    <span className="w-5 h-5 mr-3">📧</span>
                    <span>{formData.email || "your.email@example.com"}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5 h-5 mr-3">📱</span>
                    <span>{formData.phone || "Your Phone Number"}</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-8">
              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🎓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide">EDUCATION</h2>
                </div>
                {educationData.map((entry, index) => (
                  <div className="mb-6 relative pl-8" key={index}>
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-blue-200"></div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{entry.school || "School Name"}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{entry.title || "Degree/Title"}</p>
                      <p className="text-gray-500 text-sm font-medium">{entry.date || "Date"}</p>
                    </div>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💼</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide">EXPERIENCE</h2>
                </div>
                {practicleData.map((entry, index) => (
                  <div className="mb-6 relative pl-8" key={index}>
                    <div className="absolute left-0 top-2 w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-green-200"></div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{entry.companyName || "Company Name"}</h3>
                      <p className="text-green-600 font-semibold mb-2">{entry.positionTitle || "Position Title"}</p>
                      <p className="text-gray-500 text-sm font-medium mb-3">
                        {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide">SKILLS</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsData.map((entry, index) => (
                    <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium" key={index}>
                      {entry.skillName || "Skill Name"}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide">ACHIEVEMENTS</h2>
                </div>
                {achievementsData.map((entry, index) => (
                  <div className="mb-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm" key={index}>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{entry.title || "Achievement Title"}</h3>
                    <p className="text-yellow-600 font-medium text-sm mb-2">{entry.date || "Date"}</p>
                    <p className="text-gray-700 leading-relaxed">{entry.description || "Achievement description..."}</p>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide">INTERESTS</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {interestsData.map((entry, index) => (
                    <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium" key={index}>
                      {entry.interest || "Interest"} 
                      {entry.category && entry.category !== "Personal" && (
                        <span className="text-indigo-600 ml-1">({entry.category})</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
