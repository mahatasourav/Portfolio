import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsFillLightningFill, BsKanbanFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

const skillsData = {
  "Frontend Development": [
    {
      name: "React.js",
      percentage: 85,
      color: "bg-blue-500 dark:bg-blue-400",
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      color: "bg-indigo-500 dark:bg-indigo-400",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: "JavaScript",
      percentage: 88,
      color: "bg-yellow-500 dark:bg-yellow-400",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
    },
  ],
  "Backend Development": [
    {
      name: "Node.js",
      percentage: 80,
      color: "bg-green-500 dark:bg-green-400",
      icon: <FaNodeJs className="text-[#339933]" />,
    },
    {
      name: "MongoDB",
      percentage: 75,
      color: "bg-emerald-500 dark:bg-emerald-400",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      name: "Express.js",
      percentage: 82,
      color: "bg-gray-500 dark:bg-gray-400",
      icon: <SiExpress className="text-gray-800 dark:text-white" />,
    },
  ],
  Tools: [
    {
      name: "Git",
      percentage: 80,
      color: "bg-green-500 dark:bg-green-400",
      icon: <FaGitAlt className="text-[#F05032]" />,
    },
    {
      name: "GitHub",
      percentage: 75,
      color: "bg-emerald-500 dark:bg-emerald-400",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },
    {
      name: "Vercel",
      percentage: 82,
      color: "bg-gray-500 dark:bg-gray-400",
      icon: <SiVercel className="text-black dark:text-white" />,
    },
  ],
  "Programming & DSA": [
    {
      name: "C++",
      percentage: 85,
      color: "bg-red-500 dark:bg-red-400",
      icon: <TbBrandCpp className="text-[#00599C]" />,
    },
    {
      name: "DSA",
      percentage: 80,
      color: "bg-purple-500 dark:bg-purple-400",
      icon: <BsFillLightningFill className="text-[#FFD700]" />,
    },
    {
      name: "Problem Solving",
      percentage: 85,
      color: "bg-orange-500 dark:bg-orange-400",
      icon: <GiBrain className="text-[#FF6B6B]" />,
    },
  ],
};

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(skillsData)[0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("skills"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency in various
            technologies
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={animated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>

              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={animated ? { width: `${skill.percentage}%` } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full ${skill.color} rounded-full`}
                />
              </div>

              <div className="mt-2 text-right">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.percentage}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
