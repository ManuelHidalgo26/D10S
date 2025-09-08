import React from 'react';
import hero from '../assets/images/hero-argentina.jpg';
import CtaButton from './CtaButton';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <img src={hero} alt="Argentina paisaje" className="rounded shadow" loading="lazy" />
        <div className="space-y-4 text-azul">
          <h2 className="text-2xl font-semibold">Nuestra visión</h2>
          <p>
            D10$ es un proyecto comunitario que busca representar lo mejor de
            Argentina: nuestra alegría, nuestra cultura y nuestra fe popular.
            Una cripto simple, transparente y hecha para unir a la comunidad.
          </p>
          <CtaButton href="#buy" variant="outline">
            Comprar ahora
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default About;
