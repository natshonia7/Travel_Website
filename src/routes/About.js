import React from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImageAbout from '../assets/night.jpg'
import AboutUs from '../components/AboutUs'

import Footer from '../components/Footer'


function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroImg={ImageAbout}
        title="About"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
