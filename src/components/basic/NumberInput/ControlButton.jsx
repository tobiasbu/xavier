import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a control button.
 *
 * Controls increasing and decreasing of values from a Input component.
 * @param {*} props
 */
const ControlButton = (props) => {
  const {
    plusSign, onClick, disabled, ariaLabel,
  } = props;
  const iconName = (!plusSign) ? 'input-dash' : 'input-plus';

  return (
    <button
      className="a-input__btn-control"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <i className={`a-icon a-icon--${iconName} a-icon--size-small`} />
    </button>
  );
};

/**
 * Button control default props
 */
ControlButton.defaultProps = {
  disabled: false,
  plusSign: false,
  onClick: null,
};

/**
 * Button control prop types
 */
ControlButton.propTypes = {
  disabled: PropTypes.bool,
  plusSign: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
};

export default ControlButton;
