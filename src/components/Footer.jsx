import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-azul py-12 text-blanco" aria-labelledby="footer-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <p id="footer-heading" className="text-2xl font-semibold tracking-wide">
              D10$
            </p>
            <p className="text-sm text-blanco/80">
              La memecoin argentina impulsada por su gente. Unite, participá y ayudanos a crear impacto positivo.
            </p>
          </div>
          <nav
            aria-label="Enlaces de pie"
            className="flex flex-wrap justify-center gap-3 text-sm font-medium sm:justify-end"
          >
            <a
              href="#inicio"
              className="rounded transition-colors hover:text-dorado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              Inicio
            </a>
            <a
              href="#features"
              className="rounded transition-colors hover:text-dorado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              Comunidad
            </a>
            <a
              href="#about"
              className="rounded transition-colors hover:text-dorado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              Acerca
            </a>
            <a
              href="#buy"
              className="rounded transition-colors hover:text-dorado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              Comprar
            </a>
          </nav>
        </div>
        <div className="space-y-2 text-xs text-blanco/70">
          <p>
            Invertir en criptomonedas implica riesgos. Informate y evaluá tu perfil antes de operar. Este contenido no
            representa asesoramiento financiero.
          </p>
          <p>&copy; {new Date().getFullYear()} D10$ · Comunidad argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
