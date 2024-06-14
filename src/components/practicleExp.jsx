/* eslint-disable react/prop-types */
import "../style/practicle.css"


const PracticalExperience = ({ practicleData, setPracticleData }) => {
    const handleData = (index, e) => {
        const updatedData = practicleData.map((entry, i) =>
            i === index ? { ...entry, [e.target.name]: e.target.value } : entry
        );
        setPracticleData(updatedData);
    };

const addPracticelExp= () => {
    setPracticleData([...practicleData, {
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
    }])
}

    return (
        <div className="practical-container">
            <section>
                {practicleData.map((entry, index) => (
                    <div key={index}>
                        <h2>Practical Experience</h2>
                        <label>
                            Company Name:
                            <input type="text" name="companyName" value={entry.companyName} onChange={(e)=> handleData(index, e)} />
                        </label>
                        <label>
                            Position Title:
                            <input type="text" name="positionTitle" value={entry.positionTitle} onChange={(e)=> handleData(index, e)}/>
                        </label>
                        <label>
                            Date From:
                            <input type="date" name="dateFrom" value={entry.dateFrom} onChange={(e)=> handleData(index, e)} />
                        </label>
                        <label>
                            Date Until:
                            <input type="date" name="dateUntil" value={entry.dateUntil} onChange={(e)=> handleData(index, e)} />
                        </label>
                        <label>
                            Main Responsibilities:
                            <textarea type="text" 
                            name="mainResponsibilities" 
                            placeholder="Write Your responsibilites"
                            value={entry.mainResponsibilities} onChange={(e)=> handleData(index, e)} />
                        </label>

                    </div>

                ))}
                <button onClick={addPracticelExp}>Add More</button>
            </section>
        </div>
    );
};

export default PracticalExperience;



