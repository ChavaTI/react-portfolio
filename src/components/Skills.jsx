import React, { useState } from "react";
import Skill from "./Skill";

const Skills = ({handleCurrentSkill}) => {
  const [skills, handleSkills] = useState([
    {
      name: "React",
      rawName: "react",
      icon: "fab fa-react",
      selected: false,
      card: "react-card",
      description: `ReactJs is my favorite frontend library develop. I fully know how to use both the props and class components, 
                    stateless functional components and hook components. I’m also a person who likes following good practices. 
                    I’m skilled at using Redux in ReactJS. When I use this tool I usually connect the react app with the API Rest using axios.`
    },
    {
      name: "Angular",
      rawName: "angular",
      icon: "fab fa-angular",
      selected: false,
      card: "angular-card",
      description: `Angular was the first frontend framework that I knew.  I master using the components of this framework and 
                    I alway try to take advantage of the angular materials to have good UI results. Also, 
                    I always stick to good practices when I code in TypeScript and Angular.`
    },
    {
      name: "Node",
      rawName: "node",
      icon: "fab fa-node-js",
      selected: false,
      card: "node-card",
      description: `NodeJS was the first backend framework I’ve ever worked with. At the beginning I used to develop web apps using 
                    NodeJS Express and Jade. But, nowadays I’ve tended to make API rests in order to make MEAN stack apps and MERN stack apps. 
                    The data bases that I’ve used are MySQL, MariaBD and Mongoo.  Consequently, I’ve learned how to connect them with Node apps. 
                    And Finally, the technology that I use to make authorization tokens is JWT.`
    },
    {
      name: "PHP",
      rawName: "php",
      icon: "fab fa-php",
      selected: false,
      card: "php-card",
      description: `My first web language was PHP, I’ve used this language since university. My knowledge of this field goes from  PHP 7 on web server, 
      connecting the app with MySQL and SQLServer databases, to how to print the data in order`
    },
    {
      name: "Laravel",
      rawName: "laravel",
      icon: "fab fa-laravel",
      selected: false,
      card: "laravel-card",
      description: `I've created project with Laravel framework using its tools like Laravel controllers, blade, eloquent, phpunit for test the code and 
                    anothers console tools to created the basic code and save time in the development, I've used migrations to mkae changes in mysql database.`
    },
    {
      name: "Java",
      rawName: "java",
      icon: "fab fa-java",
      selected: false,
      card: "java-card",
      description: `Java is my first POO language. I have a lot of experience coding in Java since I’ve worked with it for a long time. 
                    I know  how to make either CLI apps, GUI apps (using code and using NetBeans tools) and web apps. 
                    Another thing that I’d like to point out is that I've used many libraries and frameworks in java such that JDBC, JDBI, JPA, 
                    Hibernate, SpringMVC.`
    },
    {
      name: "DB",
      rawName: "db",
      icon: "fas fa-database",
      selected: false,
      card: "db-card",
      description: `One element inside my skill set is designing SQL databases. The common way that I follow to achieve this task is 
                    I start modeling using CASE tools and then I implement them in MySQL , MariaDB or SQLServer. 
                    I know how to manage the databases and add security. I face all the above not only using tools as PhpMyAdmin and MySql Workbench 
                    but using SQL script too.  Within the No SQL databases I’ve learned to create Mongo databases.`
    },
    {
      name: "Linux",
      rawName: "linux",
      icon: "fab fa-linux",
      selected: false,
      card: "linux-card",
      description: `Linux systems are the reason why I love computer science. I’ve used linux for ten years, I know how to install and manage the systems 
                    like Debian systems, Red hat systems and Arch linux systems. On the other hand,  the Linux Servers that 
                    I've used are Ubuntu Server, Debian, CentOS and Fedora Server. Into this systems I have knowledge of how to install and manage 
		    the Apache web server, NGINX, Tomcat server, DNS servers, DHCP servers, Webmin, databases (See more in databases section), and LAMP server. 
                    Even more, I know how to install and use network security tools like Nagios and nmap. 
                    My actual linux system is Arch linux but I've opted for Ubuntu (Kubuntu, Xubuntu, Ubuntu mate), Debian, Fedora, Manjaro, Linux Mint 
		    as personal systems too. Lastly, writing shell script code is also part of my skill set.`
    },
    {
      name: "Docker",
      rawName: "docker",
      icon: "fab fa-docker",
      selected: false,
      card: "docker-card",
      description: `Regarding docker, I can upload only few lines of code instead of making an oversize configuration on the server. 
                    When I work in team I prefer to use docker so the team can be sure that the project will work in any computer 
                    no matter their Operative System. I master using docker in console and using scripts like dockerfiles and docker-compose. 
                    I’ve launched docker containers with different servers like Apache, Ngnix, and LAMP (mainly Linux, Mysql and PHP). 
                    There is a bunch of projects in which I have appealed docker, these include, but are not limited to laravel, node, and java projects.`
    },
    {
      name: "Diagram",
      rawName: "diagram",
      icon: "fas fa-project-diagram",
      selected: false,
      card: "diagram-card",
      description: `I’m able to make software engineering that goes from requirements analysis using interviews, surveys, documentation analysis, 
                    until software design using entity–relationship models, relational models, database normalization, flowcharts, use case diagrams, 
                    and mockup designs. In addition, during the develop phase, I have experience working with SCRUM and KANBAN. Finally, 
                    I've deployed projects on AWS and digital ocean using docker.`
    },
    {
      name: "Language",
      rawName: "language",
      icon: "fas fa-language",
      selected: false,
      card: "language-card",
      description: `My native language is spanish and I've studied english since elementary school until now. 
                    I've been in different english courses but I try to practice my english everyday with some friends.
                    I consider that my english is good because apart from I've tried to read more english books to improve,  
                    I've been able to establish a conversation in english with american people.`
    },
    {
      name: "Learning",
      rawName: "learning",
      icon: "fas fa-book-reader",
      selected: false,
      card: "learning-card",
      description: `I love computer science, software development, programming, and making solutions. 
                    Then, I study these topics whenever I need it or I want to learn new informatic stuff. 
		    I resort to all kind of resources, for instance web sites, blogs, forums, software documentations, tutorials, web courses, or books.
                    I consider myself a self-taught person. If I don't know how to do it, I'll learn it and then I’ll do it. 
                    It is worth mentioning that I love sharing my knowledge with people, which I think is a great feature of mine.`
    },
  ]);

  const syncSkills = (skillData) => {
    let copySkills = [...skills];
    let updateSkills = copySkills.map((skill) => {
      if (skill.rawName === skillData.rawName) {
	if(skill.selected){
	  skill.selected = false;
	  handleCurrentSkill({});
	}else{
	  skill.selected = true;
	  handleCurrentSkill(skill);
	}
      }else{
	skill.selected = false;
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
