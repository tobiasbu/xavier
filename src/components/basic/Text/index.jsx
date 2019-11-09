import React from 'react';
import PropTypes from 'prop-types';

/**
 * Astro text
 * @param {any} props Text props
 */
const Text = (props) => {
  const { size, children, className } = props;
  let sizeName = 'medium';
  if (size <= 1) {
    sizeName = 'large';
  } else if (size === 3) {
    sizeName = 'small';
  } else if (size >= 4) {
    sizeName = 'very-small';
  }
  return (
    <p className={`a-text--secondary-${sizeName} ${className}`}>{children}</p>
  );
};

/**
 * Text default props
 */
Text.defaultProps = {
  size: 2,
  children: '',
  className: '',
};

/**
 * Text prop types
 */
Text.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Text;
