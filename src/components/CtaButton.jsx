import React from 'react';
import PropTypes from 'prop-types';

/**
 * Call-to-action button.
 *
 * @param {'primary' | 'outline'} variant - Visual style of the button.
 * @param {string} href - Destination URL (required).
 * @param {React.ReactNode} children - Button contents.
 */
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

CtaButton.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  children: PropTypes.node,
};

export default CtaButton;
