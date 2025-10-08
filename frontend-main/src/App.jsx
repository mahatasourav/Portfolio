import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ParticleBackground from "./components/ParticleBackground";
import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "I miss You 🥺, Come back 😢";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white relative">
      <Navbar />

      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
