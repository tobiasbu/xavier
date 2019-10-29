import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef { import("./types").ButtonProps } ButtonProps
 * @typedef { import("./types").Button } Button
 */

/**
 * Button component
 * @param { ButtonProps } props Button properties
 */
const Button = (props) => {
  const { children, color } = props;
  let text = children;
  if (children) {
    text = children.trim();
    if (text.length <= 0) {
      text = Button.defaultProps.children;
    }
  }

  return (
    <button
      className={`a-btn a-btn--${color} a-btn--medium`}
      type="button"
      aria-label={`${text}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  // Easter-Egg to remember that we NEED to insert text in a button.
  // By the way, this song is from Led Zeppelin. (DON'T FORGET TO REMOVE THIS)
  children: 'Ramble on and now\'s the time, the time is now, to sing my song...',
  color: 'uranus',
};

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
