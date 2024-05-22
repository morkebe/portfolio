// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this block for each project */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-700 mb-4">Short description of the project.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
          {/* End of project block */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
