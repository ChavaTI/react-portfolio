import React, { useState, useEffect } from 'react';
import Header from './components/commons/Header';
import { scroller as scroll } from 'react-scroll';
import Footer from './components/commons/Footer';
import SocialNets from './components/SocialNets';
import About from './components/About';
import Skills from './components/Skills';
import AboutSkill from './components/AboutSkill';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import * as firebaseConfig from './firebase/config';
import firebase from 'firebase';

function App() {
  const [currentSkill, handleCurrentSkill] = useState({});
  useEffect(() => {
    scroll.scrollTo('about-skill', {
      smooth: true,
    });
  }, [currentSkill]);
  return (
    <div className="container">
      <FirebaseDatabaseProvider firebase = {firebase} {...firebaseConfig}>
        <Header />
        <SocialNets />
        <section>
          <About />
          <Skills handleCurrentSkill={handleCurrentSkill} />
          <AboutSkill currentSkill={currentSkill} />
          <Experiences />
          <Contact />
        </section>
        <Footer />
      </FirebaseDatabaseProvider>
    </div>
  );
}

export default App;
