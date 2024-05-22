// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 text-gray-800 leading-tight rounded shadow" id="name" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 text-gray-800 leading-tight rounded shadow" id="email" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 text-gray-800 leading-tight rounded shadow" id="message" rows="5"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
