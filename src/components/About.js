import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl text-center font-bold mb-4"
      >
        À propos de moi
      </motion.h2>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center">
        {/* Section de gauche avec votre photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="moi.png"
            alt="Votre Nom"
            className="w-64 h-64 rounded-full shadow-lg"
          />
        </motion.div>
        {/* Section de droite avec le texte */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mt-6 lg:mt-0"
        >
          <p className="text-2xl leading-relaxed">
            Développeur Full Stack Web et Mobile avec une solide expérience en développement front-end et back-end. Passionné par l'IA et la création d'applications innovantes. Engagé dans la promotion de l'environnement durable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
