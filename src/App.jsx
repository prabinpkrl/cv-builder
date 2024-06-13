import { useState } from 'react';
import EducationalExperience from "./components/educationExp"
import GeneralInfo from "./components/GeneralInfo"
import PracticalExperience from "./components/practicleExp"
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [practicleData, setPracticleData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [editing, setEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit =() =>{
    setEditing(true)
  }
  return (
    <div className="App">
      <div className='formbox'>
        <GeneralInfo formData={formData} setFormData={setFormData} />
        <EducationalExperience educationData={educationData} setEducationData={setEducationData} />
        <PracticalExperience practicleData={practicleData} setPracticleData={setPracticleData} />
        <div className="button-group">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    

      <div className='submittedbox'>
        {submitted && (
          <div>
            <h2>Submitted Information</h2>
            <section>
              <h3>General Information</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
            </section>
            <section>
              <h3>Educational Experience</h3>
              <p>School: {educationData.school}</p>
              <p>Title: {educationData.title}</p>
              <p>Date: {educationData.date}</p>
            </section>

            <section>
              <h3>Practical Experience</h3>
              <p>Company Name: {practicleData.companyName}</p>
              <p>Position Title: {practicleData.positionTitle}</p>
              <p>Main Responsibilities: {practicleData.mainResponsibilities}</p>
              <p>Date From: {practicleData.dateFrom}</p>
              <p>Date Until: {practicleData.dateUntil}</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
