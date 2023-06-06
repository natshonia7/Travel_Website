import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImageAbout from '../assets/night.jpg'
import Trip from '../components/Trip'

import Footer from '../components/Footer'

function Service() {
  return (
    <>
    <Navbar />
    <Hero
      cName=".hero-mid"
      heroImg={ImageAbout}
      title="Service"
      btnClass="hide"
    />
     <Trip/>
    <Footer/>
  </>
  )
}

export default Service