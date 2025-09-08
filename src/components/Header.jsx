import React, { useState } from 'react';
import logo from '../assets/images/logo-d10s.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 bg-blanco border-b border-gris z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo D10$" className="h-8 w-8" loading="lazy" />
          <span className="font-bold text-azul">D10$</span>
        </a>
        <nav
          className={`${isOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 text-azul font-medium`}
        >
          <a href="#" onClick={handleLinkClick}>
            Inicio
          </a>
          <a href="#about" onClick={handleLinkClick}>
            Acerca
          </a>
          <a href="#buy" onClick={handleLinkClick}>
            Comprar
          </a>
        </nav>
        <button
          className="md:hidden text-azul"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
