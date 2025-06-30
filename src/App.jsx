import { useState } from 'react'

import './App.css'
import NavigationBar from './components/navbar';
import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import Tokenomics from "./components/tokenomicssection";
import RoadmapsSection from "./components/roadmapsection";
import FooterSection from "./components/footer";
import { ThemeConfig } from "flowbite-react";

function App() {
  return (
    <>
      <ThemeConfig dark={false} />
      <NavigationBar></NavigationBar>
   
    <div id='Home'>
      <HeroSection></HeroSection>
    </div>
    <div id='about'>
      <AboutSection>

      </AboutSection>
    </div>
    <div id='tokenomics'>
      <Tokenomics>
        
      </Tokenomics>
    </div>
    <div id='roadmaps'>
      <RoadmapsSection>
      </RoadmapsSection>
    </div>
    <div>
      <FooterSection></FooterSection>
    </div>
    </>
  )
}

export default App
