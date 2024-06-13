/* eslint-disable react/prop-types */
// import { useState } from "react";
import "../style/general.css"

const GeneralInfo = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="general-container">
            <h1>CV Builder</h1>
            <form>
                <section>
                    <h2>General Information</h2>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" name="phone" onChange={handleChange} />
                    </label>
                </section>
            </form>
        </div>
    );
};

export default GeneralInfo;
