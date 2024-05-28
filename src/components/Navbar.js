// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-white text-xl">Mor Khoudia Kebe</div>
      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-9">
          <a href="#home" className="block px-4 py-2  hover:text-white">Home</a>
          <a href="#about" className="block px-4 py-2 hover:text-white">About</a>
          <a href="#projects" className="block px-4 py-2 hover:text-white">Projects</a>
          <a href="#contact" className="block px-4 py-2  hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
