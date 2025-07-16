import React from "react";
import portfolioData from "./../data/data.json";
import styles from "./Navigation.module.css";

const colorMap = {
  blue: styles.blue,
  purple: styles.purple,
  pink: styles.pink,
  green: styles.green,
  yellow: styles.yellow,
};

const Navigation = ({ isDark, toggleTheme, scrollToSection }) => {
  // CSS variables based on theme
  const themeVars = {
    "--nav-bg": isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
    "--nav-border": isDark ? "rgba(255, 255, 255, 0.1)" : "#00000022",
    "--toggle-bg": isDark ? "rgba(255, 255, 255, 0.1)" : "#f9fafb",
    "--icon-color": isDark ? "#facc15" : "#374151",
  };

  return (
    <nav className={styles.nav} style={themeVars}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img
              src={isDark ? "/logo.png" : "/logo_light.png"}
              alt="Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText} data-text="Portfolio">
              Portfolio
            </span>
          </div>

          <div className={styles.navLinks}>
            {portfolioData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  item.id === "home"
                    ? window.scrollTo({ top: 0, behavior: "smooth" })
                    : scrollToSection && scrollToSection(item.id)
                }
                className={`${styles.navButton} ${colorMap[item.color] || ""}`}
              >
                {item.label}
                <span className={styles.underline}></span>
              </button>
            ))}
          </div>

          <button onClick={toggleTheme} className={styles.themeToggle}>
            <i
              className={`fas ${isDark ? "fa-sun" : "fa-moon"} ${
                isDark ? styles.sunIcon : styles.moonIcon
              }`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
