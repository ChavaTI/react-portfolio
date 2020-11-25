import React from 'react';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="header">
     <Nav />
     <div className="img-container">
        <img src="./assets/img/Yo.png" alt="Salvador Hernández López" />
      </div>
      <div className="introduce">
        <h1>Salvador Hernández López</h1>
        <p>Web developer</p>
      </div>
    </div>
  </header>
);

export default Header;
