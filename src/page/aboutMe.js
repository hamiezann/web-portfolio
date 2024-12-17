import React from "react";
import "../style/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <h2 className="about-me-title">
        {/* <span role="img" aria-label="person">
          👤
        </span>{" "} */}
        About Me
      </h2>
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            I am a passionate Computer Science student currently undergoing an
            internship at RN Technologies Sdn Bhd, where I am gaining hands-on experience in
            software development. I enjoy learning new things and
            constantly exploring new technologies and knowledge.
          </p>
        </div>
        <div className="about-me-details">
          <p>
            <strong>Full Name:</strong> Muhammad Hamiezan bin Abd Ghafar
          </p>
          <p>
            <strong>Email:</strong> mhamiezan24@gmail.com
          </p>
          <p>
            <strong>Working Area:</strong> Iskandar Puteri/Johor
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
