import React, { useState } from "react";
import "../style/SkillSet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faLaravel,
  faReact,
  faGitlab,
  faGithub,
  faLinux,
} from "@fortawesome/free-brands-svg-icons"; // FontAwesome skill icons
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons"; // Generic icons

const skills = [
  { name: "HTML", level: 90, color: "#FF5733", icon: faHtml5 },
  { name: "CSS", level: 85, color: "#1E90FF", icon: faCss3Alt },
  { name: "JavaScript", level: 80, color: "#FFD700", icon: faJs },
  { name: "PHP", level: 70, color: "#4B0082", icon: faPhp },
  { name: "Laravel", level: 90, color: "#800000", icon: faLaravel },
  { name: "React.js", level: 70, color: "#61DBFB", icon: faReact },
  { name: "Java OOP", level: 65, color: "#FF8C00", icon: faCode },
  { name: "Flutter Dart", level: 50, color: "#008080", icon: faCode },
  { name: "GitLab", level: 70, color: "#FC6D26", icon: faGitlab },
  { name: "GitHub", level: 85, color: "#000000", icon: faGithub },
  { name: "Linux", level: 40, color: "#A9A9A9", icon: faLinux },
  { name: "MySQL", level: 60, color: "#00758F", icon: faDatabase },
];

function SkillSet() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skillset-container">
      <h2 className="title">My Skill Set</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
       <div
       className="skill-jar"
       key={index}
       onMouseEnter={() => setActiveSkill(skill.name)}
       onMouseLeave={() => setActiveSkill(null)}
     >
       <div
         className="water"
         style={{
           height: `${skill.level}%`,
           backgroundColor: activeSkill === skill.name ? "#b3d9ff" : skill.color,
         }}
       ></div>
       <div className="icon-container">
         <FontAwesomeIcon
           icon={skill.icon}
           size="2x"
           style={{ color: activeSkill === skill.name ? "black" : skill.color }}
         />
       </div>
       <div className="jar-label">{skill.name}</div>
     </div>
     
        ))}
      </div>
    </section>
  );
}

export default SkillSet;
