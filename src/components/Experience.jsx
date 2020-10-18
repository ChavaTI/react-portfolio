import React from "react";
import Swal from "sweetalert2";

const Experience = ({ exp }) => {
  const showExp = () => {
    Swal.fire({
      title: exp.company,
      text: exp.description,
      imageUrl: exp.urlImage,
      imageAlt: exp.company,
    });
  };

  return (
    <div className="square-card">
      <div className="square-card-header">
        <p>{exp.company}.</p>
      </div>
      <div className="square-card-body">
        <img src={exp.urlImage} alt={exp.company} width="50%" />
        <p>{exp.description.substring(0, 255)}...</p>
      </div>
      <div className="square-card-footer">
        <button onClick={() => showExp()}>Read more</button>
      </div>
    </div>
  );
};

export default Experience;
