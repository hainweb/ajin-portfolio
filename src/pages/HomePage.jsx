import { useState } from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Scroller from '../components/Scroller';
import Experience from '../components/Experience';
import Expertise from '../components/Expertise';
import Works from '../components/Works';
import ContactMe from '../components/Contact';

import ChatBot from '../components/ChatBot';
import Hero1 from '../components/HeroModels/Hero1';
import Scroller1 from '../components/Scroller/Scroller1';
import Experience1 from '../components/experience/Experience1';
import Expertise1 from '../components/compo/expertice';
import Works1 from '../components/compo/Works1';
import ContactMe1 from '../components/compo/contact1';




function Home() {

 
    const handleScroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
     
    };
  
    return (
      <div >
        {/* <SplashCursor/> */}
        {/* <Header onScroll={handleScroll} /> */}
        <div className=""> {/* Adds space to offset the fixed header pt-20 to move down*/}

      {/* <Hero/> */}
      <Hero1/>


      {/* <Scroller/> */}
      <Scroller1/>
    
     

      {/* <Experience /> */}
      <Experience1/>
     {/* <Expertise/> */}
     <Expertise1/>
   
      {/* <Works/> */}
      <Works1/>

     
      {/* <ContactMe/> */}
      <ContactMe1/>
 
      <ChatBot/>


    </div>
      </div>
    );
  };

export default Home
