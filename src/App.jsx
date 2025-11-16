import { useState, useRef, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import EducationalExperience from "./components/educationExp";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/practicleExp";
import SkillsSection from "./components/skillsSection";
import AchievementsSection from "./components/achievementsSection";
import InterestsSection from "./components/interestsSection";
import CVPDFDocument from "./components/CVPDFDocument";
import ClassicTemplate from "./components/ClassicTemplate";
import ModernTemplate from "./components/ModernTemplate";
import MinimalTemplate from "./components/MinimalTemplate";

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
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [submitted, setSubmitted] = useState(true); // Always show preview
  const [validationErrors, setValidationErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // For mobile toggle
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

  const toggleMobileView = () => {
    setShowPreview(!showPreview);
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
      alert('❌ Error: All required fields must be filled before downloading!\n\nPlease complete:\n• Name\n• Email\n• Phone\n• Professional Role\n• At least one Education entry\n• At least one Skill');
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
          selectedTemplate={selectedTemplate}
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
    <div className="font-sans bg-red-50 min-h-screen">
      {/* Mobile Toggle Button */}
      <div className="md:hidden bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={toggleMobileView}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !showPreview 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📝 Edit CV
            </button>
            <button
              onClick={toggleMobileView}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                showPreview 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              👁️ Preview
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 md:flex md:justify-between md:gap-4">
        {/* Input Section */}
        <div className={`${showPreview ? 'hidden' : 'block'} md:block md:w-1/2 border border-gray-300 p-5 rounded-lg bg-white shadow-lg mb-5 md:mb-0`}>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Choose CV Template</h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedTemplate("classic")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                selectedTemplate === "classic"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              Classic
            </button>
            <button
              type="button"
              onClick={() => setSelectedTemplate("modern")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                selectedTemplate === "modern"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              Modern
            </button>
            <button
              type="button"
              onClick={() => setSelectedTemplate("minimal")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                selectedTemplate === "minimal"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              Minimal
            </button>
          </div>
        </div>

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
            className="w-full p-4 bg-green-600 text-white border-none rounded-lg cursor-pointer text-base font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            Download CV as PDF
          </button>
        </div>

        </div>

        {/* Preview Section */}
        <div className={`${!showPreview ? 'hidden' : 'block'} md:block md:w-1/2 bg-white shadow-2xl md:ml-2.5 rounded-lg overflow-hidden`}>
        {submitted && (
          <div className="h-full" ref={cvRef}>
            {selectedTemplate === "classic" && (
              <ClassicTemplate
                formData={formData}
                educationData={educationData}
                practicleData={practicleData}
                skillsData={skillsData}
                achievementsData={achievementsData}
                interestsData={interestsData}
              />
            )}
            {selectedTemplate === "modern" && (
              <ModernTemplate
                formData={formData}
                educationData={educationData}
                practicleData={practicleData}
                skillsData={skillsData}
                achievementsData={achievementsData}
                interestsData={interestsData}
              />
            )}
            {selectedTemplate === "minimal" && (
              <MinimalTemplate
                formData={formData}
                educationData={educationData}
                practicleData={practicleData}
                skillsData={skillsData}
                achievementsData={achievementsData}
                interestsData={interestsData}
              />
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
