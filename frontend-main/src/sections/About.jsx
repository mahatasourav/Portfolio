import { motion } from "framer-motion";
import souravimg2 from "../assets/souravimg1.png";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 p-6 flex justify-center align-top"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={souravimg2}
            alt="Sourav Mahata"
            className="w-full max-w-md mx-auto lg:max-w-lg rounded-2xl shadow-2xl"
            style={{
              width: "350px",
              height: "450px",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white tracking-tight"
            >
              About Me
            </motion.h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Sourav Mahata
                </span>
                , a passionate Full-Stack Developer with expertise in modern web
                technologies. I specialize in creating robust and scalable
                applications using the MERN stack.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  What I Do
                </h3>
                <p className="text-lg leading-relaxed">
                  🎯 Create innovative solutions for complex problems
                  <br />
                  🤖 Collaborate with AI assistants to code faster and more
                  efficiently
                  <br />
                  🚀 Build responsive and performant web applications
                  <br />
                  💡 Mentor students in Data Structures and Algorithms
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white
                         transform transition-all duration-300 hover:bg-blue-700
                         dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
