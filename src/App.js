import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AOS from 'aos';
import React, { useEffect, useRef, useState } from 'react'
import About from './components/about/About';
import Facts from './components/Facts';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';
import Testimonial from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';

// import AOS from 'aos';
import "./App.css";

import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
function App() {
   

  return (
    <>
      <Header />
      <HeroSection />
      <main id='main'>
        <About />
         {/*<Facts />*/}
        <Skills />
        <Resume />
         {/*<Portfolio />*/}
         {/*<Service />*/}
        {/* <Testimonial /> */}
        {/* <Contact />*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
