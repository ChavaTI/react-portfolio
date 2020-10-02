import React from 'react';
import { Link  } from 'react-scroll';

const Header = () => (
   <header>
     <div className="header">
       <nav>
         <div className="nav-title">
           <p>My web CV</p>
         </div>
         <div className="nav-navigator">
          <ul>
            <li><Link to="about" smooth={true}>About</Link></li>
            <li><Link to="skills" smooth={true}>Skills</Link></li>
            <li><Link to="portfolio" smooth={true}>Portafolio</Link></li>
            <li><Link to="experience" smooth={true}>Experience</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
         </div>
        </nav>
        <div className="img-container">
          <img src="./assets/img/Yo.png" alt="Salvador Hernández López"/>
        </div>
        <div className="introduce">
          <h1>Salvador Hernández López</h1>
          <p>Web developer</p>
      </div>
     </div>
   </header>
	
);


export default Header;
