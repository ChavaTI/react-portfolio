import React, { useState, useEffect } from "react";

const Skill = ({ skill, syncSkills }) => {
  const [skillStatus, updateSkillStatus] = useState(false); 

  useEffect(() => {
    syncSkills({
      skillStatus,
      rawName: skill.rawName,
    });
  }, [skillStatus]);

  useEffect(() => {
    updateSkillStatus(skill.selected);
  }, [skill.selected]);

  const handleStatus = () => {
    if (skillStatus) {
      updateSkillStatus(false);
    } else {
      updateSkillStatus(true);
    }
  };

  return (
    <div
      style={skillStatus ? { border: "2px solid" } : null}
      onClick={() => handleStatus()}
      className={`card-t ${skill.card}`}
    >
      <i className={skill.icon}></i>
    </div>
  );
};

export default Skill;
