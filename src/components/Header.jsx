import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo-d10s.svg';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#features', label: 'Comunidad' },
  { href: '#about', label: 'Acerca' },
  { href: '#buy', label: 'Comprar' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gris/60 bg-blanco/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 text-azul" onClick={handleLinkClick}>
          <img src={logo} alt="Logo D10$" className="h-10 w-10" loading="lazy" />
          <span className="text-lg font-bold tracking-wide">D10$</span>
        </a>
        <nav
          id="primary-navigation"
          className="hidden items-center gap-8 text-azul font-medium md:flex"
          aria-label="Principal"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-dorado focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent p-2 text-azul transition hover:bg-celeste/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`md:hidden origin-top border-t border-gris/60 bg-blanco/95 px-4 transition-all duration-200 ease-out ${
          isOpen ? 'max-h-64 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Menú móvil" className="flex flex-col gap-2 py-4 text-azul font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="rounded-md px-3 py-2 transition-colors hover:bg-celeste/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
