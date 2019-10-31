import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef { import("./types").ButtonProps } ButtonProps
 */

/**
 * Button component
 * @param { ButtonProps } props Button properties
 */
const Button = (props) => {
  const {
    children, color, className, type, disabled, title,
  } = props;

  return (
    // Eslint guys sometimes...:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <button
      className={`a-btn a-btn--${color} a-btn--medium ${className}`}
      type={type}
      aria-label={`${children}`}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

/**
 * Button default props
 */
Button.defaultProps = {
  color: 'uranus',
  className: '',
  type: 'button',
  disabled: false,
};

/**
 * Button prop types
 */
Button.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;
