import React from "react";
import "../style/contactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-me-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Feel free to connect with me on the platforms below!
      </p>
      <div className="contact-icons-container">
        <a
          href="https://www.linkedin.com/in/muhammad-hamiezan-007b0a190"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/hamiezann"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.freelancer.com/u/mhamiezan11"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon freelancer"
        >
          <i className="fas fa-briefcase"></i>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
