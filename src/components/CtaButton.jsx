import React from 'react';

const CtaButton = ({ variant = 'primary', href, children }) => {
  const base =
    'inline-block px-6 py-3 rounded-md font-semibold transition-transform transform hover:scale-105';
  const styles = {
    primary: `${base} bg-dorado text-azul shadow hover:shadow-md`,
    outline: `${base} border-2 border-celeste text-azul hover:bg-celeste/20`,
  };
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      className={styles[variant]}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

export default CtaButton;
