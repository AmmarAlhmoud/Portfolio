import React from "react";
import portfolioData from "./../data/data.json";
import styles from "./About.module.css";

const colorMap = {
  green: styles.skillDotGreen,
  blue: styles.skillDotBlue,
  purple: styles.skillDotPurple,
};

const About = ({ isDark }) => {
  const themeVars = {
    "--section-bg": isDark
      ? "#111827"
      : "linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)",
    "--card-bg": isDark ? "#0c111b" : "#ffffff",
    "--card-border": isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
    "--card-shadow-primary": isDark
      ? "rgba(59, 130, 246, 0.5)"
      : "rgba(59, 130, 246, 0.8)",
    "--card-shadow-secondary": isDark
      ? "rgba(59, 130, 246, 0.3)"
      : "rgba(59, 130, 246, 0.1)",
    "--info-subtitle-color": isDark ? "#9ca3af" : "#4b5563",
    "--education-border-color": "#3b82f6",
    "--experience-border-color": "#a855f7",
    "--education-details-color": isDark ? "#93c5fd" : "#4a9af6ff",
    "--experience-details-color": isDark ? "#d8b4fe" : "#9f4afaff",
  };

  return (
    <section id="about" className={styles.section} style={themeVars}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.gradientText}>ABOUT</span> ME
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {/* Education */}
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.educationIcon}`}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className={`${styles.cardTitle} ${styles.educationTitle}`}>
              Education
            </h3>
            <div className={styles.cardContent}>
              {portfolioData.about.education.map((edu, index) => (
                <div
                  key={index}
                  className={styles.infoItem}
                  style={{ borderLeftColor: "var(--education-border-color)" }}
                >
                  <h4 className={styles.infoTitle}>{edu.degree}</h4>
                  <p
                    className={styles.infoSubtitle}
                    style={{ color: "var(--info-subtitle-color)" }}
                  >
                    {edu.university}
                  </p>
                  <p
                    className={`${styles.infoDetails} ${styles.educationDetails}`}
                  >
                    {edu.period} • {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.experienceIcon}`}>
              <i className="fas fa-briefcase"></i>
            </div>
            <h3 className={`${styles.cardTitle} ${styles.experienceTitle}`}>
              Experience
            </h3>
            <div className={styles.cardContent}>
              {portfolioData.about.experience.map((exp, index) => (
                <div
                  key={index}
                  className={styles.infoItem}
                  style={{ borderLeftColor: "var(--experience-border-color)" }}
                >
                  <h4 className={styles.infoTitle}>{exp.position}</h4>
                  <p
                    className={styles.infoSubtitle}
                    style={{ color: "var(--info-subtitle-color)" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`${styles.infoDetails} ${styles.experienceDetails}`}
                  >
                    {exp.period} • {exp.technologies}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.skillsIcon}`}>
              <i className="fas fa-code"></i>
            </div>
            <h3 className={`${styles.cardTitle} ${styles.skillsTitle}`}>
              Core Skills
            </h3>
            <div className={styles.skillsList}>
              {portfolioData.about.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <span>{skill.name}</span>
                  <div className={styles.skillRating}>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`${styles.skillDot} ${
                          i < skill.level
                            ? colorMap[skill.color] || styles.skillDotDefault
                            : styles.skillDotEmpty
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
