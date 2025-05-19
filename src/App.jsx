import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIdo';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhyChooseMe from './components/WhyChooseMe';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <WhatIDo />
        <Resume />
        <Portfolio />
        <WhyChooseMe />
        <Contact />
      </main>
    </div>
  );
}



export default App
