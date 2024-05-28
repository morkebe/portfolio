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
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/bg.jpg')", // Chemin relatif à partir du répertoire public
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
