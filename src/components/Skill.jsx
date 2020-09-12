import React, { useState, useEffect } from "react";

const Skill = ({ skill, syncSkills }) => {
  const [skillStatus, updateSkillStatus] = useState(false); 

  const handleStatus = () => {
    syncSkills({
      skillStatus,
      rawName: skill.rawName,
    });

  };

  return (
    <div
    style={skill.selected ? { border: "2px solid" } : null}
    onClick={() => handleStatus()}
    className={`card-t ${skill.card}`}
    >
    <i className={skill.icon}></i>
    </div>
  );
};

export default Skill;
