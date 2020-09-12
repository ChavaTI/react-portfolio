import React, { useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills, handleSkills] = useState([
    {
      name: "React",
      rawName: "react",
      icon: "fab fa-react",
      selected: false,
      card: "react-card",
    },
    {
      name: "Angular",
      rawName: "angular",
      icon: "fab fa-angular",
      selected: false,
      card: "angular-card",
    },
    {
      name: "Node",
      rawName: "node",
      icon: "fab fa-node-js",
      selected: false,
      card: "node-card",
    },
    {
      name: "PHP",
      rawName: "php",
      icon: "fab fa-php",
      selected: false,
      card: "php-card",
    },
    {
      name: "Laravel",
      rawName: "laravel",
      icon: "fab fa-laravel",
      selected: false,
      card: "laravel-card",
    },
    {
      name: "Java",
      rawName: "java",
      icon: "fab fa-java",
      selected: false,
      card: "java-card",
    },
    {
      name: "DB",
      rawName: "db",
      icon: "fas fa-database",
      selected: false,
      card: "db-card",
    },
    {
      name: "Linux",
      rawName: "linux",
      icon: "fab fa-linux",
      selected: false,
      card: "linux-card",
    },
    {
      name: "Docker",
      rawName: "docker",
      icon: "fab fa-docker",
      selected: false,
      card: "docker-card",
    },
    {
      name: "Diagram",
      rawName: "diagram",
      icon: "fas fa-project-diagram",
      selected: false,
      card: "diagram-card",
    },
    {
      name: "Language",
      rawName: "language",
      icon: "fas fa-language",
      selected: false,
      card: "language-card",
    },
    {
      name: "Learning",
      rawName: "learning",
      icon: "fas fa-book-reader",
      selected: false,
      card: "learning-card",
    },
  ]);

  const syncSkills = (skillData) => {
    let copySkills = [...skills];
    let updateSkills = copySkills.map((skill) => {
      skill.selected = false;
      if (skill.rawName === skillData.rawName) {
	if(skill.selected){
	  skill.selected = false;
	}else{
	 skill.selected = true;
	}
      }
      return skill;
    });
    handleSkills(updateSkills);
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
