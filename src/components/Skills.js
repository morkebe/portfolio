// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', logo: 'html.png' },
  { name: 'CSS', logo: 'css.png' },
  { name: 'Tailwind', logo: 'tailwindcss.webp' },
  { name: 'React', logo: 'react.png' },
  { name: 'MySQL', logo: 'mysql.png' },
  { name: 'MongoDB', logo: 'mongodb.webp' },
  { name: 'PHP', logo: 'php.png' },
  { name: 'Laravel', logo: 'laravel.jpg' },
  { name: 'JavaScript', logo: 'js.webp' },
  { name: 'Python', logo: 'python.png' },
  { name: 'Java', logo: 'java.png' },
  { name: 'Flutter', logo: 'flutter.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-blue-900 dark:text-white text-center py-9">Skills</h2>
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-9">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-gray-800 rounded-full shadow dark:bg-gray-800 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
              >
                <img src={skill.logo} alt={skill.name} className="w-22 h-16 mb-4" />
                <h3 className="text-lg font-semibold dark:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
