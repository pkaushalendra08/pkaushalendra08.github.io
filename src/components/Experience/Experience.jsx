import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "YoursCollege",
      duration: "September 2025 - Presnt ",
      location: "Remote",
      description: "Developed responsive React components, integrated REST APIs for analytics dashboards, and integrated Laravel backend, and work on admin panel for production.",
      skills: ["React.js", "Tailwind CSS", "REST APIs", "Git", "Laravel"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-[7vw] bg-[#224b89] text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          My professional journey and key contributions
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#8245ec] opacity-30 hidden sm:block" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#8245ec] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <FaBriefcase className="text-white text-xl" />
                </div>
                {/* Connecting Line (only if not last item) */}
                {index !== experiences.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#8245ec] opacity-30 hidden sm:block" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[#1a142f] p-6 rounded-xl shadow-md hover:shadow-[0_0_25px_#8245ec50] transition-all duration-300 hover:scale-[1.02]">
                {/* Header: Role & Company */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[#8245ec] font-semibold text-base sm:text-lg">
                    {exp.company}
                  </p>
                </div>

                {/* Meta Info: Duration & Location */}
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#8245ec]" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaLocationArrow className="text-[#8245ec]" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#8245ec] text-white border border-[#8245ec] hover:bg-transparent hover:text-[#8245ec] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
