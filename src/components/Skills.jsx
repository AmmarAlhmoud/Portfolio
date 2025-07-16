import React from "react";
import portfolioData from "./../data/data.json";
import styles from "./Skills.module.css";

const Skills = ({ isDark }) => {
  return (
    <section
      id="skills"
      className={`${styles.section} ${
        isDark ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            TECH <span className={styles.gradientText}>ARSENAL</span>
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.skillsGrid}>
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className={`${isDark ? styles.skillCard : styles.skillCardDark} ${
                styles.group
              } `}
            >
              <i
                className={`${skill.icon} ${styles.skillIcon} ${
                  !isDark && skill.color === "white"
                    ? styles[`text-black`]
                    : styles[`text-${skill.color}`]
                } animate-${skill.animation}`}
              ></i>
              <p
                className={`${styles.skillName} ${
                  !isDark && skill.color === "white"
                    ? styles[`text-black`]
                    : styles[`text-${skill.color}`]
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
