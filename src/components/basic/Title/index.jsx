import React from 'react';
import PropTypes from 'prop-types';

/**
 * Astro headings.
 * @param {TitleProps} props Properties
 */
const Title = (props) => {
  const { size, children, className } = props;

  // Lazy approach... :p
  if (size <= 1) {
    return (<h1 className={`a-text--display ${className}`}>{children}</h1>);
  }
  if (size === 2) {
    return (<h2 className={`a-title--large ${className}`}>{children}</h2>);
  }
  if (size === 3) {
    return (<h3 className={`a-title--medium ${className}`}>{children}</h3>);
  }
  if (size === 4) {
    return (<h4 className={`a-title--small  ${className}`}>{children}</h4>);
  }
  if (size === 5) {
    return (<h5 className={`a-text--large  ${className}`}>{children}</h5>);
  }
  if (size === 6) {
    return (<h6 className={`a-text--medium  ${className}`}>{children}</h6>);
  }
  if (size === 6) {
    return (<h7 className={`a-text--small  ${className}`}>{children}</h7>);
  }
  return (<h8 className={`a-text--small  ${className}`}>{children}</h8>);
};

/**
 * Title default props
 */
Title.defaultProps = {
  size: 2,
  children: 'Title',
  className: '',
};

/**
 * Title prop types
 */
Title.propTypes = {
  size: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
};

export default Title;
