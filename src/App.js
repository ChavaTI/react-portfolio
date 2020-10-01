import React, {useState} from 'react';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import SocialNets from './components/SocialNets';
import About from './components/About';
import Skills from './components/Skills';
import AboutSkill from "./components/AboutSkill";

function App() {
  const [currentSkill, handleCurrentSkill] = useState({});
  return (
    <div className="container">
       <Header/>
       <SocialNets/>
       <section>
         <About/>
         <Skills
           handleCurrentSkill = {handleCurrentSkill}
         />
         <AboutSkill
          currentSkill = {currentSkill}
         />
       </section>
       <Footer/>
    </div>
  );
}

export default App;
