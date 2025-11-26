import React from 'react';
import "../styles/globals.css";
const Footer = () => {
  return (
    <footer className="bg-azul text-blanco py-8">
      <div className="max-w-5xl mx-auto text-center space-y-2 px-4">
        
        <h2>Redes socials:</h2>
        <section className="Redes-sociales">
        <div><a href="https://www.instagram.com/dioscoin.ok?igsh=MTZidmp0cjAzaXRnaw==">Intagram</a></div>
        <div><a href=" https://x.com/D10S_oficial?t=INb2cEciNzv4qvqvuQakxA&s=08">Twitter</a></div>
        <div><a href="">TikTok</a></div>
        <div><a href="">Mail</a></div> 
        </section>       
        <p>
          D10$ es un proyecto comunitario. Invertir en criptomonedas implica riesgos. Esto no es asesoramiento financiero.
        </p>
        <p>&copy; {new Date().getFullYear()} D10$</p>
      </div>
    </footer>
  );
};

export default Footer;
