import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      setStatus("error");
      return;
    }
    console.log("formData.name", formData.name);
    console.log("formData.email", formData.email);
    console.log("formData.message", formData.message);
    try {
      await emailjs.send(
        "service_tsr2tht",
        "template_nsm9wlx",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "V1sDKiKt7g0T1aX7g"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setError("Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-auto mx-auto">
          <div className="hidden lg:block transform hover:scale-105 transition-transform duration-500">
            <DotLottieReact
              src="https://lottie.host/4498cd9f-75de-41a2-85d4-009a69c9e2ad/XwwsXFuLZY.lottie"
              loop
              autoplay
              className="w-full h-[500px] max-w-xl mx-auto"
            />
          </div>

          <div className="w-full max-w-xl mx-auto">
            <div className="backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Alert Messages */}
                {error && (
                  <div className="animate-fade-in-down bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-r">
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}
                {status === "success" && (
                  <div className="animate-fade-in-down bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-r">
                    <p className="text-green-500 text-sm">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formData.name ? formData.name : ""}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email ? formData.email : ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full ${
                    status === "loading"
                      ? "bg-gray-400"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  } text-white font-medium py-3 rounded-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {status === "loading" ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Or connect with me on social media
                </p>
                <div className="flex gap-10 mb-8 justify-center lg:justify-center align-center ">
                  <div
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
                  </div>

                  <a
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/mahatasourav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
