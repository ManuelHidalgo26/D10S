import React from 'react';
import logo from '../assets/images/logo-d10s.svg';
import CtaButton from './CtaButton';

const Header = () => {
  return (
    <header className="sticky top-0 bg-blanco border-b border-gris z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo D10$" className="h-8 w-8" loading="lazy" />
          <span className="font-bold text-azul">D10$</span>
        </a>
        <nav className="hidden md:flex space-x-6 text-azul font-medium">
          <a href="#">Inicio</a>
          <a href="#about">Acerca</a>
          <a href="#buy">Comprar</a>
        </nav>
        <div className="md:hidden">
          <CtaButton href="#buy">Comprar</CtaButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
