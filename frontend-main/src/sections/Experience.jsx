const experienceData = [
  {
    company: "Class_Suru (Educational Platform)",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - Apr 2025",
    description:
      "Developed and optimized the frontend using React.js and Tailwind CSS for an interactive learning platform.",
    companyLink: "https://classsuru.in", // Added companyLink
  },
  {
    company: "Hackerspace, MSIT",
    role: "DSA Mentor",
    duration: "Feb 2024 - Mar 2025",
    description:
      "Guiding students in mastering Data Structures and Algorithms through problem-solving sessions and mentorship.",
    companyLink: "https://hackerspacemsit.in", // Added companyLink
  },
  {
    company: "Greenovation Club, MSIT",
    role: "Executive Member",
    duration: "Oct 2023 - Nov 2024",
    description:
      "Organized tech-driven sustainability initiatives and hackathons to promote green technology.",
    companyLink:
      "https://www.linkedin.com/company/greenovation-club-meghnad-saha-institute-of-technology/", // Added companyLink
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">
          Professional Experience
        </h2>

        <div className="relative border-l-4 border-blue-500 dark:border-blue-400 pl-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="mb-12 relative hover:transform hover:translate-x-2 transition-transform duration-300"
            >
              <div className="absolute -left-[41px] top-0 w-[25px] h-[25px] bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  {exp.role}
                  <span className="text-blue-500 dark:text-blue-400">@</span>
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline "
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
