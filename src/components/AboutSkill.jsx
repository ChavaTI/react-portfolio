import React from "react";
import { Link  } from "react-scroll";

const AboutSkill = ({currentSkill}) => {

  return (
    Object.keys(currentSkill).length === 0 ? null : 
    <div id="about-skill" className = "about-skill" style = { {backgroundColor : currentSkill.color} }>
       <div className = "card">
          <div className = "card-header">
              {currentSkill.name}
           </div>
        <div className = "card-about-icon">
          <i className = { currentSkill.icon }></i>
        </div>
        <div className="card-body">
          <p>{currentSkill.description}</p>
        </div>
        <Link to="skills" smooth={true} className = "arrow-up">
          <i className = "fas fa-arrow-alt-circle-up"></i>
        </Link>
       </div>
    </div>
    
  );
}

export default AboutSkill;
