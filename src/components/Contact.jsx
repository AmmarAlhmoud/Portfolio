import React, { useState } from "react";
import portfolioData from "./../data/data.json";
import styles from "./Contact.module.css";

const Contact = ({ isDark }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSent(true);
        setTimeout(() => {
          setSent(false);
          e.target.reset();
        }, 3000);
      })
      .catch((error) => alert("Form submission failed: " + error));
  };

  const { contact, socialLinks } = portfolioData;

  return (
    <section
      id="contact"
      className={`${styles.section} ${
        isDark ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.backgroundGrid}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {contact.title.split(" ").map((word, index) =>
              index === contact.title.split(" ").length - 1 ? (
                <span key={index} className={styles.gradientText}>
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          <div className={styles.contactInfoSection}>
            <div
              className={`${styles.contactCard} ${
                isDark ? styles.cardDark : styles.cardLight
              }`}
            >
              <h3 className={styles.cardTitle}>{contact.subtitle}</h3>
              <div className={styles.contactItems}>
                {contact.items.map((item, index) => (
                  <div key={index} className={styles.contactItem}>
                    <div
                      className={`${styles.iconContainer} ${
                        styles[item.iconClass]
                      }`}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p
                        className={`${styles.contactLabel} ${
                          isDark
                            ? styles.contactLabelDark
                            : styles.contactLabelLight
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`${styles.contactValue} ${
                          isDark
                            ? styles.contactValueDark
                            : styles.contactValueLight
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialLink} ${
                        styles[social.styleClass]
                      }`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.formCard} ${
              isDark ? styles.cardDark : styles.cardLight
            }`}
          >
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              netlify
              onSubmit={handleSubmit}
              className={styles.form}
            >
              {/* Netlify hidden inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <input
                name="name"
                type="text"
                placeholder={contact.form.namePlaceholder}
                aria-label="Your name"
                required
                className={`${styles.input} ${
                  isDark ? styles.inputDark : styles.inputLight
                }`}
              />
              <input
                name="email"
                type="email"
                placeholder={contact.form.emailPlaceholder}
                aria-label="Your email"
                required
                className={`${styles.input} ${
                  isDark ? styles.inputDark : styles.inputLight
                }`}
              />
              <textarea
                name="message"
                rows="6"
                placeholder={contact.form.messagePlaceholder}
                aria-label="Your message"
                required
                className={`${styles.textarea} ${
                  isDark ? styles.inputDark : styles.inputLight
                }`}
              ></textarea>
              <button
                type="submit"
                className={`${styles.submitButton} ${
                  sent ? styles.submitButtonSent : styles.submitButtonDefault
                }`}
              >
                {sent ? contact.form.successText : contact.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
