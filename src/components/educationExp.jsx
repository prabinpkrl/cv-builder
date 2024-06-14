/* eslint-disable react/prop-types */
// import { useState } from "react";
import "../style/education.css"

const EducationalExperience = ({ educationData, setEducationData }) => {
    const handleChange = (index, e) => {
        const updatedData = educationData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry);
        setEducationData(updatedData);
    };

    const addEducation = () => {
        setEducationData([...educationData, { school: "", title: "", date: "" }]);
    }

    return (
        <div className="education-container">
            <section>
                <h2>Educational Experience</h2>
                {educationData.map((entry, index) => (
                    <div key={index}>
                        <label>
                            School Name:
                            <input type="text" name="school" value={entry.school || ""} onChange={(e) => handleChange(index, e)} />
                        </label>
                        <label>
                            Title of Study:
                            <input type="text" name="title" value={entry.title || ""} onChange={(e) => handleChange(index, e)} />
                        </label>
                        <label>
                            Date of Study:
                            <input type="date" name="date" value={entry.date || ""} onChange={(e) => handleChange(index, e)} />
                        </label>
                    </div>
                ))}
                <button onClick={addEducation}>Add more</button>

            </section>
        </div>
    );
};
export default EducationalExperience;

