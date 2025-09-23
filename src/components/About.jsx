import React from 'react';
import hero from '../assets/images/hero-argentina.jpg';
import CtaButton from './CtaButton';

const About = () => {
  return (
    <section id="about" className="bg-blanco py-16" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-last overflow-hidden rounded-2xl shadow-lg lg:order-first">
          <img
            src={hero}
            alt="Paisaje argentino con montañas y cielo despejado"
            className="h-full w-full max-h-80 object-cover md:max-h-none"
            loading="lazy"
          />
        </div>
        <div className="space-y-5 text-azul">
          <h2 id="about-heading" className="text-3xl font-semibold">
            Un proyecto con raíces argentinas y visión global
          </h2>
          <p className="text-azul/80">
            D10$ surge del amor por nuestra cultura y de las ganas de construir un ecosistema transparente y sostenible.
            Cada decisión importante se toma junto a la comunidad, con reportes abiertos y fondos trazables.
          </p>
          <ul className="space-y-3 text-azul/80">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ●
              </span>
              Gobernanza descentralizada con votaciones claras y periódicas.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ●
              </span>
              Transparencia financiera respaldada por auditorías independientes.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ●
              </span>
              Alianzas con organizaciones sociales para multiplicar el impacto.
            </li>
          </ul>
          <CtaButton href="#buy" variant="outline" className="sm:max-w-fit">
            Comprar ahora
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default About;
