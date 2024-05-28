// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faBriefcase, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-3xl">Mor Khoudia Kebe</div>
      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-9">
          <a href="#home" className="block px-4 py-2 hover:text-white">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:text-white">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> About
          </a>
          <a href="#skills" className="block px-4 py-2 hover:text-white">
            <FontAwesomeIcon icon={faCode} className="mr-2" /> Skills
          </a>
          <a href="#projects" className="block px-4 py-2 hover:text-white">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Projects
          </a>
          <a href="#contact" className="block px-4 py-2 hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
