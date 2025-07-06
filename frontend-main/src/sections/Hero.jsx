import souravimg from "../assets/souravimg2.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 21,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, currentColor 2%, transparent 0%), radial-gradient(circle at 75px 75px, currentColor 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-20 py-20"
      >
        {/* Left Content */}
        <motion.div className="text-center lg:text-left max-w-xl">
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300">
              Sourav Mahata
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6"
          >
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
              cursorColor="blue"
            />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed"
          >
            Passionate about creating innovative web solutions and turning
            complex problems into elegant interfaces. Specializing in full-stack
            development with modern technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 mb-8 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <a
                href="https://github.com/mahatasourav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-300 transition-colors cursor-pointer"
              >
                <FaGithub />
              </a>
            </motion.div>

            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/mahatasourav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://x.com/souravm38910030"
              target="_blank"
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <FaTwitter />
            </a>

            <a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://leetcode.com/u/mahatasourav/"
              target="_blank"
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <SiLeetcode />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Sourav_Mahata_Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="px-8 py-4 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 font-bold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <FaFileAlt className="text-xl" /> View CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div variants={itemVariants} className="w-60% lg:w-2/5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <motion.img
              src={souravimg}
              alt="Hero Image"
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-2xl pb-10"
              style={{
                width: "350px",
                height: "500px",
                objectFit: "cover",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-black-00 dark:to-black-00  -z-10 blur-2xl opacity-20" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
