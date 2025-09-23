import React from 'react';
import hero from '../assets/images/hero-argentina.jpg';
import CtaButton from './CtaButton';

const { VITE_PANCAKESWAP_URL, VITE_UNISWAP_URL } = import.meta.env;

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cover bg-center text-azul"
      style={{ backgroundImage: `url(${hero})` }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8 lg:items-start lg:text-left">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-azul shadow">
            Hecha por y para la comunidad
          </span>
          <h1 id="hero-heading" className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            D10$: la memecoin argentina que celebra nuestra cultura
          </h1>
          <p className="text-base text-azul/90 sm:text-lg">
            Unite a un movimiento transparente, federal y participativo. Cada compra impulsa iniciativas sociales,
            deportivas y culturales impulsadas por la comunidad D10$.
          </p>
          <ul className="grid gap-3 text-left text-sm text-azul/90 sm:grid-cols-2 sm:text-base">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ★
              </span>
              Transparencia total en liquidez y gobernanza.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ★
              </span>
              Comunidad global con raíces argentinas.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ★
              </span>
              Eventos y experiencias exclusivas para holders.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-dorado">
                ★
              </span>
              Roadmap con hitos medibles y participación abierta.
            </li>
          </ul>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start">
            <CtaButton href={VITE_PANCAKESWAP_URL}>Comprar en PancakeSwap</CtaButton>
            <CtaButton href={VITE_UNISWAP_URL} variant="outline">
              Comprar en Uniswap
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
