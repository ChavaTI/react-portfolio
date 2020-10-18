import React, { useState } from "react";
import Experience from "./Experience";

const Experiences = () => {

  const [ experiences ] = useState([
    {
      company: "The Software Artisans",
      urlImage: "./assets/img/tsa.png",
      description: `Under this period on TSA I've developed web solutions used differents tools and 
                   I've trained to the new people in TSA. I'm using languages like php, java, javascript, 
                   frameworks like reactjs, angular, laravel, about backend tools I've used NodeJS, Socket.io, 
                   JWT, Express and the databases are mysql, mongodb. All of sevrer run in docker.`
    }
  ]);

  return (
    <div id="experience" className="card">
      <div className="card-header">Experience</div>
      <div className="card-body">
        {experiences.map((exp) => (
          <Experience key={exp.company} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
