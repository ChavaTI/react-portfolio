import React from "react";

const AboutSkill = ({currentSkill}) => {
  return (
    currentSkill === undefined ? null : 
    <div id="about-skill" class="about-skill">
       <div class="card">
          <div class="card-header">
              {currentSkill.name}
           </div>
        <div class="card-about-icon"></div>
        <div class="card-body">
          <p>{currentSkill.description}</p>
        </div>
        <div class="arrow-up" id="back-to-skills">
          <i class="fas fa-arrow-alt-circle-up"></i>
        </div>
       </div>
    </div>
    
  );
}

export default AboutSkill;
