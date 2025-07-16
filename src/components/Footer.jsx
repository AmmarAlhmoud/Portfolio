import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p
            className={`${styles.copyright} ${
              isDark ? styles.textDark : styles.textLight
            }`}
          >
            &copy; {currentYear} Ammar Alhmoud. All rights reserved.
          </p>

          <button
            id="back-to-top"
            className={styles.backToTopButton}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fas fa-rocket"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
