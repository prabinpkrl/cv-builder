import { useState } from 'react';
import './App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState([{ school: '', title: '', date: '' }]);
  const [submitted, setSubmitted] = useState(false);

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = education.map((edu, i) => (
      i === index ? { ...edu, [name]: value } : edu
    ));
    setEducation(newEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>General Information</h2>
          <label>
            Name:
            <input type="text" name="name" value={generalInfo.name} onChange={handleGeneralChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={generalInfo.email} onChange={handleGeneralChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={generalInfo.phone} onChange={handleGeneralChange} />
          </label>
        </section>

        <section>
          <h2>Educational Experience</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <label>
                School Name:
                <input type="text" name="school" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
              </label>
              <label>
                Title of Study:
                <input type="text" name="title" value={edu.title} onChange={(e) => handleEducationChange(index, e)} />
              </label>
              <label>
                Date of Study:
                <input type="date" name="date" value={edu.date} onChange={(e) => handleEducationChange(index, e)} />
              </label>
            </div>
          ))}
          {/* <button type="button" onClick={handleAddEducation}>Add Education</button> */}
        </section>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Information</h2>
          <section>
            <h3>General Information</h3>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
          </section>
          <section>
            <h3>Educational Experience</h3>
            {education.map((edu, index) => (
              <div key={index}>
                <p>School: {edu.school}</p>
                <p>Title: {edu.title}</p>
                <p>Date: {edu.date}</p>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
