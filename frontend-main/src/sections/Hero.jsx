import souravimg from "../assets/souravimg2.jpg";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div
          className="text-center lg:text-left max-w-xl animate-fade-in"
          style={{
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          <h1 className="text-5xl font-bold text-gray-900">
            Hi, I'm <span className="text-purple-500">Sourav Mahata</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-400">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Enthusiast",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={40}
              delaySpeed={1000}
              cursorColor="red"
            />
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={souravimg}
            alt="Hero Image"
            className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 "
            style={{
              width: "350px",
              height: "450px",
              objectFit: "cover",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
