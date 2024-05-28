// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-white container mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-8 py-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={project.link}>
                <img className="rounded-t-lg" src={project.image} alt={project.title} />
              </a>
              <div className="p-5">
                <a href={project.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    {project.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                  {project.description}
                </p>
                <a
  href={project.link}
  className="inline-flex items-center px-3 py-2 text-sm font-medium py-2 text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

  
</a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Gestion des PFC au departement informatique de L'UIDT",
    description: "Cette application offre une solution complète et intuitive pour organiser, suivre et réussir les projets de manière efficace.",
    image: "1.png",
    link: "https://github.com/morkebe/final-pfc"
  },
  {
    title: "Msedi-International",
    description: "Cette application rend l'achat de matériaux de construction russes simple et accessible à tous, en offrant une expérience fluide de navigation et d'achat.",
    image: "2.png",
    link: "https://msedi-international.com/"
  },
  {
    title: "Sama-ladoum",
    description: "Ce site web facilite la vente de moutons pour les agriculteurs et offre aux particuliers une plateforme pratique pour acheter ces animaux en ligne.",
    image: "3.png",
    link: "https://github.com/mnjaay/sama_ladoum_app"
  },
  {
    title: "Gestion du campus social et pedagogique de L'UFR SET",
    description: "L'application  offre une solution complète pour faciliter la coordination et l'organisation des activités académiques et sociales",
    image: "4.png",
    link: "https://github.com/morkebe/ufr"
  },
  {
    title: "First Portfolio",
    description: "Cette application présente de manière concise et claire mes travaux, compétences et ambitions professionnelles.",
    image: "6.png",
    link: "https://github.com/morkebe/portfolio"
  },
  {
    title: "Gestion des taches",
    description: "Cette application mobile permet aux utilisateurs de planifier et de suivre leurs tâches facilement",
    image: "5.png",
    link: "https://github.com/morkebe/Crud-Flutter-Firebase"
  },
];

export default Projects;
