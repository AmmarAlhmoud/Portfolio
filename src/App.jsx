import React, { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";


const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = "Message Sent! 🚀";
    setTimeout(() => {
      button.textContent = originalText;
      e.target.reset();
    }, 3000);
  };

  return (
    <div
      className={`${styles.container} ${
        isDark ? styles.containerDark : styles.containerLight
      }`}
    >
      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />
      <Hero isDark={isDark} scrollToSection={scrollToSection} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Contact handleSubmit={handleSubmit} isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
