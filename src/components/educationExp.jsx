/* eslint-disable react/prop-types */
// import { useState } from "react";
import "../style/education.css"

const EducationalExperience = ({ educationData, setEducationData }) => {
    const handleChange = (e) => {
        setEducationData({ ...educationData, [e.target.name]: e.target.value });
    };

    return (
        <div className="education-container">
            <section>
                <h2>Educational Experience</h2>
                <label>
                    School Name:
                    <input type="text" name="school" onChange={handleChange} />
                </label>
                <label>
                    Title of Study:
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label>
                    Date of Study:
                    <input type="date" name="date" onChange={handleChange} />
                </label>
            </section>
        </div>
    );
};

export default EducationalExperience;

