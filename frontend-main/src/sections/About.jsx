import souravimg2 from "../assets/souravimg.jpg";
const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-10 ">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={souravimg2}
            alt="Sourav Mahata"
            className="w-80 h-80 rounded-2xl shadow-lg mx-auto md:mx-0"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            Hey there! I’m <span className="font-semibold">Sourav Mahata</span>,
            a Full-Stack Developer and DSA Mentor. Passionate about building
            modern web applications with{" "}
            <span className="font-semibold">React, Node.js, and MongoDB</span>.
            Currently working on my project{" "}
            <span className="font-semibold">Class_Suru</span>, an educational
            platform. 🚀
          </p>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Skills:</h3>
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                React.js
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg">
                Node.js
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg">
                MongoDB
              </span>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-lg">
                Tailwind CSS
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                C++
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-lg">
                DSA
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
