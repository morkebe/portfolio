import React from 'react';

const Skills = () => {
  return (
    <section id="skills" >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Mes compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compétence 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
            <p className="text-gray-700">
              Expérience dans la création de sites web réactifs et interactifs en utilisant HTML, CSS, JavaScript, React, Laravel, Tailwind CSS, Express JS etc.
            </p>
          </div>
          {/* Compétence 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Développement Mobile</h3>
            <p className="text-gray-700">
              Connaissance des principes de base du développement d'applications mobiles avec Flutter.
            </p>
          </div>
          {/* Compétence 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Langages de programmation</h3>
            <p className="text-gray-700">
              Maîtrise des langages de programmation tels que JavaScript, Python, Java.
            </p>
          </div>
          {/* Compétence 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bases de données</h3>
            <p className="text-gray-700">
              Expérience dans la création et la gestion de bases de données SQL et NoSQL.
            </p>
          </div>
          {/* Compétence 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Gestion de projet</h3>
            <p className="text-gray-700">
              Capacité à planifier, organiser et gérer des projets de développement logiciel de bout en bout.
            </p>
          </div>
          {/* Compétence 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Autres</h3>
            <p className="text-gray-700">
              Connaissance des outils de versionnage (Git), des méthodologies Agile, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
