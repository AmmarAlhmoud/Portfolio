import React from "react";
import portfolioData from "./../data/data.json";
import styles from "./Projects.module.css";

const colorMap = {
  green: styles.green,
  yellow: styles.yellow,
  pink: styles.pink,
  blue: styles.blue,
  red: styles.red,
  purple: styles.purple,
  cyan: styles.cyan,
  gray: styles.gray,
};
const colorMapStatus = {
  green: styles.greenS,
  yellow: styles.yellowS,
  pink: styles.pinkS,
  blue: styles.blueS,
  red: styles.redS,
  purple: styles.purpleS,
  cyan: styles.cyanS,
  gray: styles.grayS,
};

const Projects = ({ isDark }) => {
  const sectionStyle = {
    backgroundColor: isDark ? "#000000" : "#fff9fc",
  };

  return (
    <section id="projects" className={styles.section} style={sectionStyle}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            FEATURED <span className={styles.gradientText}>PROJECTS</span>
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div
                className={styles.card}
                style={{
                  backgroundColor: isDark ? "#000" : "#fff",
                  border: isDark
                    ? "1px solid rgba(171, 168, 168, 0.22)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: isDark
                    ? "0 8px 32px rgba(0, 0, 0, 0.1)"
                    : "0 8px 32px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  className={`${styles.cardHeader} ${
                    styles[project.gradient] || styles.defaultGradient
                  }`}
                >
                  <div className={styles.overlay}></div>
                  <div className={styles.iconContainer}>
                    <i className={`${project.icon} ${styles.icon}`}></i>
                  </div>
                  <div className={styles.statusBadge}>
                    <span
                      className={`${styles.status} ${
                        colorMapStatus[project.statusColor] || styles.grayS
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div
                  className={styles.cardBody}
                  style={{ backgroundColor: isDark ? "#000" : "#fff" }}
                >
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p
                    className={styles.description}
                    style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
                  >
                    {project.description}
                  </p>

                  <div className={styles.techStack}>
                    {project.technologies.map((tech, index) => {
                      const rawColor = project.techColors[index];
                      const techColor = isDark
                        ? colorMap[rawColor] || styles.gray
                        : styles[`${rawColor}Light`] || styles.grayLight;
                      return (
                        <span
                          key={index}
                          className={`${styles.techTag} ${techColor}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className={styles.buttonGroup}>
                    <a
                      href={project.codeLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.codeButton} ${
                        !project.codeLink ? styles.disabledButton : ""
                      }`}
                      onClick={(e) => !project.codeLink && e.preventDefault()}
                    >
                      <i className="fab fa-github"></i>Code
                    </a>

                    <a
                      href={project.demoLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.demoButton} ${
                        styles[project.gradient] || styles.defaultGradient
                      } ${!project.demoLink ? styles.disabledButton : ""}`}
                      onClick={(e) => !project.demoLink && e.preventDefault()}
                    >
                      <i className="fas fa-external-link-alt"></i>Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.futureProject}>
            <div
              className={styles.futureCard}
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.1)",
                border: isDark ? "0.3px solid #4b5563" : "0.3px solid #d1d5db",
                boxShadow: isDark
                  ? "0 8px 32px rgba(0, 0, 0, 0.1)"
                  : "0 8px 32px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                className={styles.futureCardHeader}
                style={{ backgroundColor: isDark ? "#1f2937" : "#e5e7eb" }}
              >
                <div className={styles.futureContent}>
                  <i className={`fas fa-plus ${styles.futureIcon}`}></i>
                  <p
                    className={styles.futureTitle}
                    style={{ color: isDark ? "#6b7280" : "#4b5563" }}
                  >
                    More Projects
                  </p>
                  <p
                    className={styles.futureSubtitle}
                    style={{ color: isDark ? "#4b5563" : "#6b7280" }}
                  >
                    Coming Soon
                  </p>
                </div>
              </div>
              <div
                className={styles.cardBody}
                style={{ backgroundColor: isDark ? "#000" : "#fff" }}
              >
                <h3
                  className={styles.futureProjectTitle}
                  style={{ color: isDark ? "#6b7280" : "#4b5563" }}
                >
                  Future Project
                </h3>
                <p
                  className={styles.futureDescription}
                  style={{ color: isDark ? "#6b7280" : "#4b5563" }}
                >
                  Space reserved for upcoming projects and innovations.
                </p>
                <div className={styles.techStack}>
                  <span className={styles.futureTechTag}>TBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
