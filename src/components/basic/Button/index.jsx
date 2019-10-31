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
  const {
    children, color, className, type, disabled,
  } = props;
  let text = children;
  if (children) {
    text = children.trim();
    if (text.length <= 0) {
      text = Button.defaultProps.children;
    }
  }

  return (
    // Eslint guys sometimes...:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <button
      className={`a-btn a-btn--${color} a-btn--medium ${className}`}
      type={type}
      aria-label={`${text}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

/**
 * Button default props
 */
Button.defaultProps = {
  // Easter-Egg to remember that we NEED to insert text in a button.
  // By the way, this song is from Led Zeppelin. (DON'T FORGET TO REMOVE THIS)
  children: 'Ramble on and now\'s the time, the time is now, to sing my song...',
  color: 'uranus',
  className: '',
  type: 'button',
  disabled: false,
};

/**
 * Button prop types
 */
Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;
