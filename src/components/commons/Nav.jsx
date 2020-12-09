import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">My web resume</div>
      </div>
      <div className="nav-btn">
        <label className="nav-check" htmlFor = "nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-navigator">
        <Link to="about" smooth={true}>
          About
        </Link>
        <Link to="skills" smooth={true}>
          Skills
        </Link>
        <Link to="portfolio" smooth={true}>
          Portafolio
        </Link>
        <Link to="experience" smooth={true}>
          Experience
        </Link>
        <Link to="contact" smooth={true}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
