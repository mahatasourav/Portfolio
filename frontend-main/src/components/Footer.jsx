import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Sourav Mahata</h2>
          <p className="text-gray-400">Full-Stack Developer | DSA Mentor</p>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-gray-400">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sourav Mahata. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
