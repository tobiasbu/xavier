import React from 'react';
import PropTypes from 'prop-types';

/**
 * Astro title.
 * @param {TitleProps} props
 */
const Title = (props) => {
  const { size, children } = props;

  // Lazily approach... :p
  if (size <= 2) {
    return (<h2 className="a-title--large">{children}</h2>);
  }
  if (size === 3) {
    return (<h3 className="a-title--medium">{children}</h3>);
  }
  return (<h4 className="a-title--small">{children}</h4>);
};

/**
 * Button control default props
 */
Title.defaultProps = {
  size: 2,
  children: 'Title',
};

/**
 * Button control prop types
 */
Title.propTypes = {
  size: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Title;
