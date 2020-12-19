import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [checked, handleChecked] = useState(false);
  return (
    <nav>
      <input
        type="checkbox"
        id="nav-check"
        checked={checked}
        onChange={(e) => {
          e.persist();
          const check = !checked;
          handleChecked(check);
        }}
      />
      <div className="nav-header">
        <div className="nav-title">Resume</div>
      </div>
      <div className="nav-btn">
        <label className="nav-check" htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-navigator">
        <Link to="about" smooth={true} onClick={() => handleChecked(false)}>
          About
        </Link>
        <Link to="skills" smooth={true} onClick={() => handleChecked(false)}>
          Skills
        </Link>
        <Link to="portfolio" smooth={true} onClick={() => handleChecked(false)}>
          Portafolio
        </Link>
        <Link
          to="experience"
          smooth={true}
          onClick={() => handleChecked(false)}
        >
          Experience
        </Link>
        <Link to="contact" smooth={true} onClick={() => handleChecked(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
