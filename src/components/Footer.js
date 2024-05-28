// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = '+221771095383'; // Replace with your WhatsApp number

  return (
    <footer className=" py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Mor_k2. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} aria-label="WhatsApp" className="hover:text-gray-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
