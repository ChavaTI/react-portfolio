import React, { useState, useEffect } from 'react';
import Experience from './Experience';
import getData from '../firebase/service';

const Experiences = () => {
  const [experiences, handleExperiences] = useState([]);

  const fetchData = async () => {
    const data = await getData('experiences').then((data) => data);
    handleExperiences(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
