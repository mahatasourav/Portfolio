import classsuru from "../assets/project-classsuru.png";
import focusflow from "../assets/project-focusflow.png";

const projectsData = [
  {
    title: "Class_Suru (Educational Platform)",
    description:
      "An interactive e-learning platform built using React.js, Node.js, Express, and MongoDB.",
    techStack: [
      "React.js",
      "CSS ",
      "Node.js",
      "Express.js",
      "SQL",
      "Git",
      "Github",
      "Rest API",
    ],
    link: "https://classsuru.in",
    image: classsuru, // Updated to use imported image
  },
  {
    title: "Airbnb (Airbnb Clone)",
    description:
      "A full-stack e-commerce website inspired by Myntra, built with React, Redux, and Express.",
    techStack: ["React", "Redux", "Express.js", "MongoDB"],
    link: "https://github.com/sourav-myntra-clone",
    image: "/assets/myntra-clone.png",
  },
  {
    title: "Focus Flow (Productivity App)",
    description:
      "FocusFlow is your all-in-one productivity partner — designed to simplify task management and personal finance tracking.",
    techStack: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Git",
      "Github",
      "Vercel",
      "Rest API",
    ],
    link: "https://focus-flow-pied.vercel.app/",
    image: focusflow,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-6 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
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
