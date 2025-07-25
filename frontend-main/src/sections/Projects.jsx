import classsuru from "../assets/project-classsuru.png";
import focusflow from "../assets/project-focusflow.png";
import airbnb from "../assets/project-airbnb.png";
import { FaGithub } from "react-icons/fa";
import docnest from "../assets/project-docnest.png";
import souravportfolioImage from "../assets/project-souravportfolio.png"; // Replace with your actual portfolio image

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
    github: "https://github.com/mahatasourav/Class_Suru",
    image: classsuru,
  },
  {
    title: "DocNest (Doctor Appointment App)",
    description:
      "DocNest is a full-stack web app for booking doctor appointments and managing medical schedules through a simple, user-friendly platform.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
      "REST API",
      "Axios",
      "React Router",
      "React Toastify",
      "Context API",
    ],
    link: "https://doc-nest.netlify.app/", // Add your deployed link later
    github: "https://github.com/mahatasourav/DocNest", // Update this if your repo name is different
    image: docnest, // Replace with your actual image variable
  },

  {
    title: "Sourav Mahata Portfolio",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience as a full-stack developer. Designed with a focus on clean UI, modern design, and performance optimization.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Git",
      "GitHub",
      "Vercel",
    ],
    link: "https://souravmahata.vercel.app/",
    github: "https://github.com/mahatasourav/Portfolio",
    image: souravportfolioImage,
  },
  {
    title: "Airbnb Clone",
    description:
      "A full-stack booking platform inspired by Airbnb, built using server-side rendering with EJS templates, Express.js, Node.js, and MongoDB (Mongoose). Users can browse listings, create accounts, and make property bookings.",
    techStack: ["EJS", "Express.js", "Node.js", "MongoDB"],
    link: "https://github.com/sourav-airbnb-clone",
    github: "https://github.com/mahatasourav/airbnb-clone",
    image: airbnb,
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
              <div className="relative pt-5 pl-5 pr-5">
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
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-500 text-white font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub className="text-lg" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
