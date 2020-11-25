import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => (
  <nav>
    <div className="nav-title">
      <p>My web CV</p>
    </div>
    <div className="nav-navigator">
      <ul>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true}>
            Portafolio
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
