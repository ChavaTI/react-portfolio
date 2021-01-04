import React, { useState, useEffect } from 'react';
import getData from '../firebase/service.js';
import Skill from './Skill';

const Skills = ({ handleCurrentSkill }) => {
  const [skills, handleSkills] = useState([]);

  const fetchData = async () => {
    const data = await getData('skills').then((data) => data);
    handleSkills(data);
  };

  useEffect(() => {
    fetchData();
  },[]);

  const syncSkills = (currentSkill) => {
    if (skills.includes(currentSkill)) {
      let copySkills = [...skills];
      let actualSkill = { ...currentSkill };
      let id = copySkills.findIndex((skill) => skill === currentSkill);
      actualSkill.selected = !currentSkill.selected;
      copySkills.forEach((skill) => (skill.selected = false));
      copySkills.splice(id, 1, actualSkill);
      const newSkill = actualSkill.selected ? actualSkill : {};
      handleSkills(copySkills);
      handleCurrentSkill(newSkill);
    }
  };

  return (
    <div id="skills" className="card">
      <div className="card-header">Skills</div>
      <div className="card-body-skills">
        {skills.map((skill) => (
          <Skill key={skill.rawName} skill={skill} syncSkills={syncSkills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
