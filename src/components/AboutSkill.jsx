import React from "react";

const AboutSkill = ({currentSkill, handleCurrentSkill}) => {

  const cleanCurrentSkill = () => {
    handleCurrentSkill({});
  }

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
        <div className = "arrow-up" id="back-to-skills" onClick = {cleanCurrentSkill}>
          <i className = "fas fa-arrow-alt-circle-up"></i>
        </div>
       </div>
    </div>
    
  );
}

export default AboutSkill;
