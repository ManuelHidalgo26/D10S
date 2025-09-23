import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Footer from '../components/Footer';
import CtaButton from '../components/CtaButton';

const { VITE_PANCAKESWAP_URL, VITE_UNISWAP_URL } = import.meta.env;

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <section id="buy" className="bg-blanco py-16" aria-labelledby="buy-heading">
          <div className="mx-auto max-w-3xl space-y-6 px-4 text-center text-azul sm:px-6 lg:px-8">
            <h2 id="buy-heading" className="text-3xl font-semibold">
              Comprá D10$ en tu exchange preferido
            </h2>
            <p className="text-azul/80">
              Recordá verificar las direcciones oficiales antes de operar y sumate a nuestros canales para recibir
              novedades de primera mano.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <CtaButton href={VITE_PANCAKESWAP_URL}>Comprar en PancakeSwap</CtaButton>
              <CtaButton href={VITE_UNISWAP_URL} variant="outline">
                Comprar en Uniswap
              </CtaButton>
            </div>
            <p className="text-xs text-azul/60">Invertir con responsabilidad es clave. Hacé tu propia investigación.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
