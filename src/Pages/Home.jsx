import React from 'react'
import NavbarComponents from '../components/NavbarComponents'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
        <NavbarComponents />
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <Footer />
    </div>
  )
}
