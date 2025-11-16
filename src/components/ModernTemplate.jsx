const ModernTemplate = ({
  formData,
  educationData,
  practicleData,
  skillsData,
  achievementsData,
  interestsData,
}) => {
  return (
    <div className="h-full flex flex-col">
      <header className="bg-blue-900 text-white p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
              {formData.name || "Your Name"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-2 text-blue-100 font-light">
              {formData.role || "Your Professional Role"}
            </p>
          </div>
          <div className="text-sm sm:text-base space-y-1">
            <div className="flex items-center">
              <span className="font-semibold">Email</span>
              <span className="ml-2 break-all">{formData.email || "your.email@example.com"}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Phone</span>
              <span className="ml-2">{formData.phone || "Your Phone Number"}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        <aside className="md:w-1/3 bg-blue-50 border-b md:border-b-0 md:border-r border-blue-100 p-4 sm:p-6 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-blue-900 tracking-wide mb-3 border-b border-blue-200 pb-1">
              SKILLS SNAPSHOT
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((entry, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm bg-white text-blue-900 border border-blue-200 rounded-full px-3 py-1 font-medium"
                >
                  {entry.skillName || "Skill"}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-blue-900 tracking-wide mb-3 border-b border-blue-200 pb-1">
              INTERESTS
            </h2>
            <div className="space-y-1">
              {interestsData.map((entry, index) => (
                <div key={index} className="text-xs sm:text-sm text-blue-900 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  <span>
                    {entry.interest || "Interest"}
                    {entry.category && entry.category !== "Personal" && (
                      <span className="text-blue-500 ml-1">({entry.category})</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="md:w-2/3 p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <section>
            <div className="mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 tracking-wide border-b-2 border-blue-500 pb-2">
                EDUCATION
              </h2>
            </div>
            {educationData.map((entry, index) => (
              <div className="mb-3 sm:mb-4" key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {entry.school || "School Name"}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    {entry.date || "Date"}
                  </p>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  {entry.title || "Degree/Title"}
                </p>
              </div>
            ))}
          </section>

          <section>
            <div className="mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 tracking-wide border-b-2 border-blue-500 pb-2">
                EXPERIENCE
              </h2>
            </div>
            {practicleData.map((entry, index) => (
              <div className="mb-4 sm:mb-5" key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {entry.companyName || "Company Name"}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                  </p>
                </div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  {entry.positionTitle || "Position Title"}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                  {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                </p>
              </div>
            ))}
          </section>

          <section>
            <div className="mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 tracking-wide border-b-2 border-blue-500 pb-2">
                ACHIEVEMENTS
              </h2>
            </div>
            {achievementsData.map((entry, index) => (
              <div className="mb-3 sm:mb-4" key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {entry.title || "Achievement Title"}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">
                    {entry.date || "Date"}
                  </p>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {entry.description || "Achievement description..."}
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ModernTemplate;
