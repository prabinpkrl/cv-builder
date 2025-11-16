const MinimalTemplate = ({
  formData,
  educationData,
  practicleData,
  skillsData,
  achievementsData,
  interestsData,
}) => {
  return (
    <div className="h-full bg-white">
      <header className="border-b border-gray-200 p-4 sm:p-6 md:p-8 bg-white text-gray-900">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {formData.name || "Your Name"}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
          {formData.role || "Your Professional Role"}
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center">
            <span className="font-medium">Email</span>
            <span className="ml-2 break-all">{formData.email || "your.email@example.com"}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Phone</span>
            <span className="ml-2">{formData.phone || "Your Phone Number"}</span>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        <section>
          <div className="mb-3">
            <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-700 uppercase">
              Education
            </h2>
          </div>
          <div className="space-y-3">
            {educationData.map((entry, index) => (
              <div key={index} className="border-b border-gray-100 pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {entry.school || "School Name"}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {entry.date || "Date"}
                  </p>
                </div>
                <p className="text-gray-700 text-sm mt-1">
                  {entry.title || "Degree/Title"}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3">
            <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-700 uppercase">
              Experience
            </h2>
          </div>
          <div className="space-y-3">
            {practicleData.map((entry, index) => (
              <div key={index} className="border-b border-gray-100 pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {entry.companyName || "Company Name"}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                  </p>
                </div>
                <p className="text-gray-700 text-sm mt-1">
                  {entry.positionTitle || "Position Title"}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3">
            <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-700 uppercase">
              Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.map((entry, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-800"
              >
                {entry.skillName || "Skill Name"}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3">
            <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-700 uppercase">
              Achievements
            </h2>
          </div>
          <div className="space-y-3">
            {achievementsData.map((entry, index) => (
              <div key={index} className="border-b border-gray-100 pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {entry.title || "Achievement Title"}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {entry.date || "Date"}
                  </p>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {entry.description || "Achievement description..."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3">
            <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-700 uppercase">
              Interests
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interestsData.map((entry, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-800"
              >
                {entry.interest || "Interest"}
                {entry.category && entry.category !== "Personal" && (
                  <span className="text-gray-500 ml-1">({entry.category})</span>
                )}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MinimalTemplate;
