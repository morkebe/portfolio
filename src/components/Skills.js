import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { title: "Développement Web", description: "Expérience dans la création de sites web réactifs et interactifs en utilisant HTML, CSS, JavaScript, React, Laravel, Tailwind CSS, Express JS etc." },
    { title: "Développement Mobile", description: "Connaissance des principes de base du développement d'applications mobiles avec Flutter." },
    { title: "Langages de programmation", description: "Maîtrise des langages de programmation tels que JavaScript, Python, Java." },
    { title: "Bases de données", description: "Expérience dans la création et la gestion de bases de données SQL et NoSQL." },
    { title: "Gestion de projet", description: "Capacité à planifier, organiser et gérer des projets de développement logiciel de bout en bout." },
    { title: "Autres", description: "Connaissance des outils de versionnage (Git), des méthodologies Agile, etc." }
  ];

  return (
    <section id="skills">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Mes compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 * index }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 50 * index }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-2"
              >
                {skill.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 50 * index }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-gray-700"
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
