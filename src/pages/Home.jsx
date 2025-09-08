import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import CtaButton from '../components/CtaButton';

const { VITE_PANCAKESWAP_URL, VITE_UNISWAP_URL } = import.meta.env;

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <section id="buy" className="py-16 bg-blanco">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-2xl font-semibold text-azul">Compra D10$</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton href={VITE_PANCAKESWAP_URL}>Comprar en PancakeSwap</CtaButton>
            <CtaButton href={VITE_UNISWAP_URL} variant="outline">
              Comprar en Uniswap
            </CtaButton>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
