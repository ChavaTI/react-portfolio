import React from "react";
import { Link } from "react-scroll";

const AboutSkill = ({ currentSkill }) => {
  return Object.keys(currentSkill).length === 0 ? null : (
    <div id="about-skill" className={`about-skill ${currentSkill.card}`}>
      <div className="card">
        <div className="card-header text">{currentSkill.name}</div>
        <div className="card-about-icon">
          <i className={currentSkill.icon}></i>
        </div>
        <div className="card-body text">
          <p>{currentSkill.description}</p>
        </div>
        <Link to="skills" smooth={true} className="arrow-up">
          <i className="fas fa-arrow-alt-circle-up"></i>
        </Link>
      </div>
    </div>
  );
};

export default AboutSkill;
