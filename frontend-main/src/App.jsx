import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { useEffect } from "react";
import Education from "./sections/Education";

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
      <main className="mt-5">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section> */}
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
