import React from 'react';
import PropTypes from 'prop-types';

/**
 * Call-to-action button.
 *
 * @param {'primary' | 'outline'} variant - Visual style of the button.
 * @param {string} href - Destination URL (required).
 * @param {React.ReactNode} children - Button contents.
 */
const CtaButton = ({ variant = 'primary', href, children, className = '' }) => {
  const base =
    'inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-md font-semibold text-center transition-transform transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado';
  const styles = {
    primary: `${base} bg-dorado text-azul shadow hover:shadow-md`,
    outline: `${base} border-2 border-celeste text-azul hover:bg-celeste/20`,
  };
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      className={`${styles[variant]} ${className}`.trim()}
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
  className: PropTypes.string,
};

export default CtaButton;
