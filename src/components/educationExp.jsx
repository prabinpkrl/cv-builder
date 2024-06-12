
const EducationalExperience = ({ onChange, data }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange('educationalExperience', { ...data, [name]: value });
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      <input name="schoolName" placeholder="School Name" value={data.schoolName} onChange={handleChange} />
      <input name="titleOfStudy" placeholder="Title of Study" value={data.titleOfStudy} onChange={handleChange} />
      <input name="dateOfStudy" placeholder="Date of Study" value={data.dateOfStudy} onChange={handleChange} />
    </div>
  );
};

export default EducationalExperience;
