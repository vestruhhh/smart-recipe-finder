import React from 'react'
// import Navbar from '../Components/Navbar';
import Hero from '../Sections/Hero';
import Footer from '../Components/Footer'
import AboutUs from '../Sections/AboutUs';
import TopRecipes from '../Sections/TopRecipes';
import ContactUs from '../Sections/ContactUs';
import Testimonials from '../Sections/Testimonials';
import HowItWorks from '../Sections/HowItWorks';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <HowItWorks />
      <TopRecipes />
      <ContactUs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage