const experienceData = [
  {
    company: "Class_Suru (Educational Platform)",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - Present",
    description:
      "Developed and optimized the frontend using React.js and Tailwind CSS for an interactive learning platform.",
  },
  {
    company: "Hackerspace, MSIT",
    role: "DSA Mentor",
    duration: "Feb 2024 - Present",
    description:
      "Guiding students in mastering Data Structures and Algorithms through problem-solving sessions and mentorship.",
  },
  {
    company: "Greenovation Club, MSIT",
    role: "Executive Member",
    duration: "2023 - Present",
    description:
      "Organized tech-driven sustainability initiatives and hackathons to promote green technology.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Experience
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-700">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
