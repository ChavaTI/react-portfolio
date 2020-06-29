import React, { useState } from 'react';
import Skill from './Skill';

const Skills = () => {

    const [skills , addSkill] = useState([
        {
            name: "React",
            rawName: "react",
            icon: "fab fa-react",
            card: "react-card"
        },
        {
            name: "Angular",
            rawName: "angular",
            icon: "fab fa-angular",
            card: "angular-card"
        },
        {
            name: "Node",
            rawName: "node",
            icon: "fab fa-node-js",
            card: "node-card"
        },
        {
            name: "PHP",
            rawName: "php",
            icon: "fab fa-php",
            card: "php-card"
        },
        {
            name: "Laravel",
            rawName: "laravel",
            icon: "fab fa-laravel",
            card: "laravel-card"
        },
        {
            name: "Java",
            rawName: "java",
            icon: "fab fa-java",
            card: "java-card"
        },
        {
            name: "DB",
            rawName: "db",
            icon: "fas fa-database",
            card: "db-card"
        },
        {
            name: "Linux",
            rawName: "linux",
            icon: "fab fa-linux",
            card: "linux-card"
        },
        {
            name: "Docker",
            rawName: "docker",
            icon: "fab fa-docker",
            card: "docker-card"
        },
        {
            name: "Diagram",
            rawName: "diagram",
            icon: "fas fa-project-diagram",
            card: "diagram-card"
        },
        {
            name: "Language",
            rawName: "language",
            icon: "fas fa-language",
            card: "language-card"
        },
        {
            name: "Learning",
            rawName: "learning",
            icon: "fas fa-book-reader",
            card: "learning-card"
        }
    ]);

    return ( 
        <div id="skills" className="card">
                <div className="card-header">
                    Skills
                </div>
                <div className="card-body-skills">
                    {skills.map(skill => (
                        <Skill
                            key = {skill.name}
                            skill = {skill}
                        />
                    ))}
                </div>
        </div>
     );
}
 
export default Skills;