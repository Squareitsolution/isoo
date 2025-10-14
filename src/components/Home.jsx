import React from 'react'
import Header from "./Header"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import WhyChooseUs from "./WhyChooseUs"
import ServicesSection from "./ServicesSection"
import ProcessSection from "./ProcessSection"
import ClientLogos from "./ClientLogos"
import Testimonials from "./Testimonials"
import FAQSection from "./FAQSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import FloatingButtons from "./FloatingButtons"
import ScrollToTop from "./ScrollToTop"

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ProcessSection />
      <ClientLogos />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  )
}

export default Home
