import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../DarkMode/DarkMode";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { Link } from "react-scroll"; // import it
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // get current URL
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="text-xl" /> },
    { id: "about", label: "About", icon: <FaUser className="text-xl" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <FaLaptopCode className="text-xl" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <FaEnvelope className="text-xl" />,
    },
  ];

  const handleClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg fixed top-0 z-50 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <FaCode className="text-3xl text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Sourav Mahata | Portfolio
            </h1>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="flex items-center space-x-6">
            {/* Navigation items (scroll to sections) */}
            {isHome ? (
              <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 text-lg font-medium">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault(); // prevent default jump
                        handleClick(item.id); // update active section
                        const section = document.getElementById(item.id);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`relative px-3 py-2 flex items-center space-x-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        activeSection === item.id
                          ? "text-blue-600 dark:text-blue-400"
                          : ""
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:flex "
              >
                ← Back to Home
              </button>
            )}

            {/* Blog link (navigate to different page) */}
            {isHome && (
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hidden md:flex ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200"
                  }`
                }
              >
                Blog
              </NavLink>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 h-screen w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl"
          >
            <motion.div>
              {isHome ? (
                <motion.ul className="flex flex-col space-y-6 mt-20 p-8">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navItems.indexOf(item) * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <button
                        onClick={() => {
                          const section = document.getElementById(item.id);
                          if (section)
                            section.scrollIntoView({ behavior: "smooth" });
                          handleClick(item.id);
                          setIsOpen(false); // close mobile menu
                        }}
                        className={`flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.icon}
                        <span className="text-lg font-medium">
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                  {/* Blog link */}
                  <li>
                    <NavLink
                      to="/blog"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block p-2 rounded-lg text-lg font-medium transition-colors mt-2${
                          isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                </motion.ul>
              ) : (
                // On /blog page, show only Back to Home
                <div className="flex flex-col mt-20 p-8">
                  <button
                    onClick={() => {
                      navigate("/");
                      setIsOpen(false);
                    }}
                    className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ← Back to Home
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
