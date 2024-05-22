import React from 'react';

const About = () => {
  return (
    <section id="about" className="">
         <h2 className="text-3xl text-center font-bold mb-4">À propos de moi</h2>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center">
        {/* Section de gauche avec votre photo */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="moi.png"
            alt="Votre Nom"
            className="w-64 h-64 rounded-full shadow-lg"
          />
        </div>
        {/* Section de droite avec le texte */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
         
          <p className="text-2xl leading-relaxed">
          Développeur Full Stack Web et Mobile avec une solide expérience en développement front-end et back-end. Passionné par l'IA et la création d'applications innovantes. Engagé dans la promotion de l'environnement durable.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
