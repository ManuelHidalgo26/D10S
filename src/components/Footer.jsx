import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-azul text-blanco py-8">
      <div className="max-w-5xl mx-auto text-center space-y-2 px-4">
        <p>
          D10$ es un proyecto comunitario. Invertir en criptomonedas implica riesgos. Esto no es asesoramiento financiero.
        </p>
        <p>&copy; {new Date().getFullYear()} D10$</p>
      </div>
    </footer>
  );
};

export default Footer;
