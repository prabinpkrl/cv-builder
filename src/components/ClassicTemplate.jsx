const ClassicTemplate = ({
  formData,
  educationData,
  practicleData,
  skillsData,
  achievementsData,
  interestsData,
}) => {
  return (
    <div className="h-full">
      <header className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 text-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 tracking-wide">
            {formData.name || "Your Name"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-gray-300 font-light">
            {formData.role || "Your Professional Role"}
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-1 sm:space-y-0 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center justify-center">
              <span className="font-medium">Email:</span>
              <span className="ml-2 break-all">{formData.email || "your.email@example.com"}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-medium">Phone:</span>
              <span className="ml-2">{formData.phone || "Your Phone Number"}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 md:p-8">
        <section className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">
              EDUCATION
            </h2>
          </div>
          {educationData.map((entry, index) => (
            <div className="mb-3 sm:mb-4" key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {entry.school || "School Name"}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  {entry.date || "Date"}
                </p>
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                {entry.title || "Degree/Title"}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">
              EXPERIENCE
            </h2>
          </div>
          {practicleData.map((entry, index) => (
            <div className="mb-4 sm:mb-6" key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {entry.companyName || "Company Name"}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                </p>
              </div>
              <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                {entry.positionTitle || "Position Title"}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">
              SKILLS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {skillsData.map((entry, index) => (
              <div className="text-gray-700 font-medium text-sm sm:text-base" key={index}>
                • {entry.skillName || "Skill Name"}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">
              ACHIEVEMENTS
            </h2>
          </div>
          {achievementsData.map((entry, index) => (
            <div className="mb-3 sm:mb-4" key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {entry.title || "Achievement Title"}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  {entry.date || "Date"}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {entry.description || "Achievement description..."}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-300 pb-2">
              INTERESTS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestsData.map((entry, index) => (
              <div className="text-gray-700 font-medium text-sm sm:text-base" key={index}>
                • {entry.interest || "Interest"}
                {entry.category && entry.category !== "Personal" && (
                  <span className="text-gray-500 ml-1">({entry.category})</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassicTemplate;
