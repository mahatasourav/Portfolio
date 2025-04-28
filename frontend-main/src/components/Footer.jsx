import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5"></div>

      <div className="relative container mx-auto px-6 lg:px-20 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sourav Mahata
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into elegant solutions through code. Full-stack
              developer passionate about creating impactful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                📍 Kolkata, India
              </p>
              <p className="hover:text-white transition-colors duration-300 cursor-pointer">
                📧 mahatasourav35@gamil.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/mahatasourav",
                  color: "hover:text-purple-400",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/mahatasourav",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaTwitter />,
                  href: "https://x.com/souravm38910030",
                  color: "hover:text-blue-300",
                },
                {
                  icon: <SiLeetcode />,
                  href: "https://leetcode.com/u/mahatasourav/",
                  color: "hover:text-yellow-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Sourav Mahata. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
