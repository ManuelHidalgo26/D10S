import React from 'react';
import hero from '../assets/images/hero-argentina.jpg';
import CtaButton from './CtaButton';

const { VITE_PANCAKESWAP_URL, VITE_UNISWAP_URL } = import.meta.env;

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-azul bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 max-w-2xl px-4 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          D10$: la memecoin argentina de comunidad y transparencia
        </h1>
        <p className="text-lg md:text-xl">
          Una cripto alegre, cultural y comunitaria, inspirada en Argentina.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton href={VITE_PANCAKESWAP_URL}>Comprar en PancakeSwap</CtaButton>
          <CtaButton href={VITE_UNISWAP_URL} variant="outline">
            Comprar en Uniswap
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
