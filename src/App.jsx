import { useState, useRef, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import EducationalExperience from "./components/educationExp";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/practicleExp";
import SkillsSection from "./components/skillsSection";
import AchievementsSection from "./components/achievementsSection";
import InterestsSection from "./components/interestsSection";
import CVPDFDocument from "./components/CVPDFDocument";

function App() {
  const cvRef = useRef();
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
  const [validationErrors, setValidationErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  // const [editing, setEditing] = useState(true)

  // Update validation in real-time when form data changes
  useEffect(() => {
    const isValid = validateRequiredFields();
    setIsFormValid(isValid);
  }, [formData, educationData, skillsData]);

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

  // Validation function for required fields
  const validateRequiredFields = () => {
    const errors = [];
    
    // Check required general info fields
    if (!formData.name || formData.name.trim() === '') {
      errors.push('Name is required');
    }
    if (!formData.email || formData.email.trim() === '') {
      errors.push('Email is required');
    }
    if (!formData.phone || formData.phone.trim() === '') {
      errors.push('Phone number is required');
    }
    if (!formData.role || formData.role.trim() === '') {
      errors.push('Professional role is required');
    }
    
    // Check if at least one education entry is filled
    const hasEducation = educationData.some(entry => 
      entry.school && entry.school.trim() !== '' && 
      entry.title && entry.title.trim() !== ''
    );
    if (!hasEducation) {
      errors.push('At least one education entry is required');
    }
    
    // Check if at least one skill is filled
    const hasSkills = skillsData.some(entry => 
      entry.skillName && entry.skillName.trim() !== ''
    );
    if (!hasSkills) {
      errors.push('At least one skill is required');
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const downloadCV = async () => {
    // Check if form is valid before downloading
    if (!isFormValid) {
      alert('Please fill in all required fields:\n\n' + validationErrors.join('\n'));
      return;
    }
    try {
      // Create PDF document using react-pdf
      const doc = (
        <CVPDFDocument 
          formData={formData}
          educationData={educationData}
          practicleData={practicleData}
          skillsData={skillsData}
          achievementsData={achievementsData}
          interestsData={interestsData}
        />
      );
      
      // Generate PDF blob
      const blob = await pdf(doc).toBlob();
      
      // Generate filename
      const fileName = formData.name 
        ? `${formData.name.replace(/\s+/g, '_')}_CV.pdf` 
        : 'My_CV.pdf';
      
      // Create download link and trigger download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <div className="font-sans bg-red-50 p-5 flex justify-between gap-4 min-h-screen">
      <div className="w-1/2 border border-gray-300 p-5 rounded-lg bg-white shadow-lg">
        <GeneralInfo formData={formData} setFormData={setFormData} />

        <div className="mb-4">
          <button 
            onClick={handleEduChange}
            className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
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
            className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
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
            className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
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
            className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
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
            className="w-full p-4 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            {showInterestsData ? "Hide" : "Show"} Interests & Hobbies
          </button>
          {showInterestsData && (
            <InterestsSection
              interestsData={interestsData}
              setInterestsData={setInterestsData}
            />
          )}
        </div>

        <div className="mb-4">
          <button 
            onClick={downloadCV}
            className={`w-full p-4 border-none rounded-lg cursor-pointer text-base font-semibold transition-all duration-300 shadow-md flex items-center justify-center ${
              isFormValid 
                ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5' 
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            {isFormValid ? 'Download CV as PDF' : 'Complete Required Fields to Download'}
          </button>
          
          {validationErrors.length > 0 && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="text-sm font-semibold text-red-800 mb-2">Required Fields Missing:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                {validationErrors.map((error, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      <div className="w-1/2 bg-white shadow-2xl ml-2.5 rounded-lg overflow-hidden">
        {submitted && (
          <div className="h-full" ref={cvRef}>
            <header className="bg-gray-800 text-white p-8 text-center">
              <div>
                <h1 className="text-4xl font-bold mb-3 tracking-wide">{formData.name || "Your Name"}</h1>
                <p className="text-xl mb-4 text-gray-300 font-light">{formData.role || "Your Professional Role"}</p>
                <div className="flex justify-center space-x-8 text-gray-300">
                  <div className="flex items-center">
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">{formData.email || "your.email@example.com"}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">{formData.phone || "Your Phone Number"}</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-8">
              <section className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">EDUCATION</h2>
                </div>
                {educationData.map((entry, index) => (
                  <div className="mb-4" key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-800">{entry.school || "School Name"}</h3>
                      <p className="text-gray-500 text-sm font-medium">{entry.date || "Date"}</p>
                    </div>
                    <p className="text-gray-700 font-medium">{entry.title || "Degree/Title"}</p>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">EXPERIENCE</h2>
                </div>
                {practicleData.map((entry, index) => (
                  <div className="mb-6" key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-800">{entry.companyName || "Company Name"}</h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                      </p>
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">{entry.positionTitle || "Position Title"}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                    </p>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">SKILLS</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skillsData.map((entry, index) => (
                    <div className="text-gray-700 font-medium" key={index}>
                      • {entry.skillName || "Skill Name"}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">ACHIEVEMENTS</h2>
                </div>
                {achievementsData.map((entry, index) => (
                  <div className="mb-4" key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-800">{entry.title || "Achievement Title"}</h3>
                      <p className="text-gray-500 text-sm font-medium">{entry.date || "Date"}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{entry.description || "Achievement description..."}</p>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">INTERESTS</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {interestsData.map((entry, index) => (
                    <div className="text-gray-700 font-medium" key={index}>
                      • {entry.interest || "Interest"}
                      {entry.category && entry.category !== "Personal" && (
                        <span className="text-gray-500 ml-1">({entry.category})</span>
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
