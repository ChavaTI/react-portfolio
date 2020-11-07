import React from "react";

const Skill = ({ skill, syncSkills }) => {
  const handleStatus = () => {
    syncSkills(skill);
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
