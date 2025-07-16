import React from "react";
import portfolioData from "./../data/data.json";
import styles from "./Hero.module.css";

const Hero = ({ isDark, scrollToSection }) => {
  const themeVars = {
    "--text-color": isDark ? "#d1d5db" : "#1f2937",
    "--subtext-color": isDark ? "#9ca3af" : "#4b5563",
    "--description-color": isDark ? "#9ca3af" : "#000000",
    "--button-border": isDark ? "rgba(255, 255, 255, 0.2)" : "#d1d5db",
    "--button-hover-bg": isDark
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(243, 244, 246, 0.5)",
    "--button-bg": isDark ? "transparent" : "#f3f4f6",
    "--profile-bg": isDark ? "#000000" : "#ffffff",
    "--background-color": isDark
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "#ffffff",
    backgroundImage: isDark
      ? "radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%)"
      : "#fff",
  };

  const downloadCVHandler = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Ammar_Alhmoud_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={styles.hero} style={themeVars}>
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingElement} ${styles.bluePulse}`}></div>
        <div
          className={`${styles.floatingElement} ${styles.purpleHexagon}`}
        ></div>
        <div
          className={`${styles.floatingElement} ${styles.pinkTriangle}`}
        ></div>
        <div className={`${styles.floatingElement} ${styles.greenPulse}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.availabilityBadge}>
              <span className={styles.badge}>
                👋 {portfolioData.personal.availability}
              </span>
            </div>
            <h1 className={styles.title}>
              <span className={styles.firstName}>
                {portfolioData.personal.name.split(" ")[0]}
              </span>
              <span
                className={styles.lastName}
                style={{ color: "var(--text-color)" }}
              >
                {portfolioData.personal.name.split(" ")[1]}
              </span>
            </h1>
            <div
              className={styles.subtitle}
              style={{ color: "var(--subtext-color)" }}
            >
              <span className={styles.blueText}>
                {portfolioData.personal.title}
              </span>{" "}
              •
              <span className={styles.purpleText}>
                {portfolioData.personal.subtitle}
              </span>
            </div>
            <p
              className={styles.description}
              style={{ color: "var(--description-color)" }}
            >
              {portfolioData.personal.description}
            </p>

            <div className={styles.buttonGroup}>
              <button
                onClick={() => scrollToSection && scrollToSection("projects")}
                className={styles.primaryButton}
              >
                <span className={styles.buttonText}>Explore Projects</span>
                <div className={styles.buttonOverlay}></div>
              </button>

              <button
                className={styles.secondaryButton}
                style={{
                  backgroundColor: "var(--button-bg)",
                  borderColor: "var(--button-border)",
                  color: "var(--text-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--button-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--button-bg)";
                }}
                onClick={downloadCVHandler}
              >
                Download CV
              </button>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.profileContainer}>
              <div className={styles.spinningRing}></div>
              <div
                className={styles.profileInner}
                style={{ backgroundColor: "var(--profile-bg)" }}
              >
                <div className={styles.profileIcon}>
                  <i className="fas fa-code"></i>
                </div>
              </div>

              <div className={styles.orbitContainer}>
                <div className={`${styles.techOrbit} ${styles.reactOrbit}`}>
                  <i className="fab fa-react"></i>
                </div>
                <div className={`${styles.techOrbit} ${styles.jsOrbit}`}>
                  <i className="fab fa-js-square"></i>
                </div>
                <div className={`${styles.techOrbit} ${styles.pythonOrbit}`}>
                  <i className="fab fa-python"></i>
                </div>
                <div className={`${styles.techOrbit} ${styles.nodeOrbit}`}>
                  <i className="fab fa-node-js"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
