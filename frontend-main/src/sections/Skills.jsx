import { useState, useEffect } from "react";

const skillsData = [
  { name: "React.js", percentage: 85, color: "bg-blue-500" },
  { name: "Node.js", percentage: 80, color: "bg-green-500" },
  { name: "MongoDB", percentage: 75, color: "bg-yellow-500" },
  { name: "Tailwind CSS", percentage: 90, color: "bg-indigo-500" },
  { name: "C++", percentage: 85, color: "bg-red-500" },
  { name: "DSA", percentage: 80, color: "bg-purple-500" },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 500); // Delay animation start
  }, []);

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                  style={{
                    width: animated ? `${skill.percentage}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
