import React from 'react';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import SocialNets from './components/SocialNets';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
       <Header/>
       <SocialNets/>
       <section>
         <About/>
         <Skills/>
       </section>
       <Footer/>
    </div>
  );
}

export default App;
