// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div class="py-5"><About /></div>
      
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
