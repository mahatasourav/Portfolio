import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science And Business System",
      institution: "Meghnad saha Institute of Technology (WBUT)",
      grade: "GPA: 7.74",
      icon: <FaGraduationCap className="text-4xl text-blue-500" />,
    },
    {
      id: 2,
      degree: "Higher Secondary (WBCHSE)",
      institution: "Sevayatan Vidyalaya (H.S)",
      grade: "Grade: 88.2%",
      icon: <FaSchool className="text-4xl text-blue-500" />,
    },
    {
      id: 3,
      degree: "Secondary (WBBSE)",
      institution: "Sevayatan vidyalaya (H.S)",
      grade: "Grade: 84.4%",
      icon: <FaSchool className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6 pb-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className="p-6 sm:p-8 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {edu.institution}
                  </p>
                  <p className="inline-block px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
