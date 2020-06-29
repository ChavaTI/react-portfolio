import React from 'react';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import SocialNets from './components/SocialNets';

function App() {
  return (
    <div className="container">
       <Header/>
       <SocialNets/>
       <Footer/>
    </div>
  );
}

export default App;
