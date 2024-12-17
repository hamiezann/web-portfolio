
import React, { useState, useEffect } from 'react';
import Header from './page/header';
import Footer from './page/footer';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SectionOne from './page/section1';
import SectionTwo from './page/section2';
import AboutMe from './page/aboutMe';
import SkillSet from './page/SkillSet';
import PastProject from './page/past-project';
import ContactMe from './page/contactMe';

function App() {


  return (
    <div>
     
      <main>

        <SectionOne />
        <AboutMe />
        <SkillSet />
        <PastProject />
        <ContactMe />
      </main>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
