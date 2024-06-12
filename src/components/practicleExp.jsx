

const PracticalExperience = ({ onChange, data }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange('practicalExperience', { ...data, [name]: value });
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      <input name="companyName" placeholder="Company Name" value={data.companyName} onChange={handleChange} />
      <input name="positionTitle" placeholder="Position Title" value={data.positionTitle} onChange={handleChange} />
      <input name="mainResponsibilities" placeholder="Main Responsibilities" value={data.mainResponsibilities} onChange={handleChange} />
      <input name="dateFrom" placeholder="Date From" value={data.dateFrom} onChange={handleChange} />
      <input name="dateUntil" placeholder="Date Until" value={data.dateUntil} onChange={handleChange} />
    </div>
  );
};

export default PracticalExperience;
