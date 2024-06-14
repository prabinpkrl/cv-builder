import { useState } from "react";
import EducationalExperience from "./components/educationExp";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/practicleExp";
import "./App.css";

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
    <div className="App">
      <div className="formbox">
        <GeneralInfo formData={formData} setFormData={setFormData} />

        <div className="edubox">
          <button onClick={handleEduChange}>
            {showEducationData ? "Hide" : "Add"}
            Educational
          </button>
          {showEducationData && (
            <EducationalExperience
              educationData={educationData}
              setEducationData={setEducationData}
            />
          )}
        </div>

        <div className="practbox">
          <button onClick={handlePracticleChange}>
            {showPracticleData ? "Hide" : "Show"}
            Practical
          </button>
          {showPracticleData && (
            <PracticalExperience
              practicleData={practicleData}
              setPracticleData={setPracticleData}
            />
          )}
        </div>

        <div className="button-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div className="submittedbox">
        {submitted && (
          <div>
            <header>
              {/* <h3>General Information</h3> */}
              <h1>{formData.name}</h1>
              <p className="subtitle">{formData.role}</p>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
            </header>

            <section className="education">
              <h2>Educational</h2>
              {educationData.map((entry, index) => (
                <div className='education-item' key={index}>
                  <h3>{entry.school}</h3>
                  <p>{entry.title}</p>
                  <p>{entry.date}</p>
                </div>
              ))}
            </section>

            <section className="experience">
              <h2>Practical Experience</h2>
              {practicleData.map((entry, index) => (
                <div className="experience-item" key={index}>
                  <h3>{entry.companyName}</h3>
                  <p>Position:{entry.positionTitle}</p>
                  <p>
                    Date From: {entry.dateFrom}-Date Until:
                    {entry.dateUntil}
                  </p>
                  <p>
                    Main Responsibilities: {entry.mainResponsibilities}
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
