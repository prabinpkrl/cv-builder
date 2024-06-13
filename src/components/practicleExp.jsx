/* eslint-disable react/prop-types */
import "../style/practicle.css"


const PracticalExperience = ({ practicleData, setPracticleData }) => {
    const handleData = (e) => {
        setPracticleData({ ...practicleData, [e.target.name]: e.target.value });
    };

    return (
        <div className="practical-container">
            <section>
                <h2>Practical Experience</h2>
                <label>
                    Company Name:
                    <input type="text" name="companyName" onChange={handleData} />
                </label>
                <label>
                    Position Title:
                    <input type="text" name="positionTitle" onChange={handleData} />
                </label>
                <label>
                    Main Responsibilities:
                    <input type="text" name="mainResponsibilities" onChange={handleData} />
                </label>
                <label>
                    Date From:
                    <input type="date" name="dateFrom" onChange={handleData} />
                </label>
                <label>
                    Date Until:
                    <input type="date" name="dateUntil" onChange={handleData} />
                </label>
            </section>
        </div>
    );
};

export default PracticalExperience;



