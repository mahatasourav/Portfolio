const projectsData = [
  {
    title: "Class_Suru (Educational Platform)",
    description:
      "An interactive e-learning platform built using React.js, Node.js, Express, and MongoDB.",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://classsuru.com",
    image: "/assets/classsuru.png", // Image path
  },
  {
    title: "Myntra Clone",
    description:
      "A full-stack e-commerce website inspired by Myntra, built with React, Redux, and Express.",
    techStack: ["React", "Redux", "Express.js", "MongoDB"],
    link: "https://github.com/sourav-myntra-clone",
    image: "/assets/myntra-clone.png",
  },
  {
    title: "Expense Tracker",
    description:
      "A finance management tool that tracks expenses, categories, and generates reports.",
    techStack: ["React", "Tailwind", "Firebase"],
    link: "https://expensetracker.com",
    image: "/assets/expense-tracker.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap mt-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
