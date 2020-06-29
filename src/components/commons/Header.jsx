import React from 'react';

const Header = () => (
   <header>
     <div className="header">
       <nav>
         <div className="nav-title">
           <a href="#">My web CV</a>
         </div>
         <div className="nav-navigator">
          <ul>
            <li><a id="toAbout" href="#">About</a></li>
            <li><a id="toSkills" href="#">Skills</a></li>
            <li><a id="toPortafolio" href="#">Portafolio</a></li>
            <li><a id="toExperience" href="#">Experience</a></li>
            <li><a id="toContact" href="#">Contact</a></li>
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
