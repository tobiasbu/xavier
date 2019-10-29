import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as Utils from '@utils';

/**
 * @typedef { import("./types").ToggleProps } ToggleProps
 */

/**
 * Astro Toggle.
 * @param {ToggleProps} props Properties
 */
const Toggle = (props) => {
  const {
    label, disabled, checked, onChange,
  } = props;

  const [isChecked, setChecked] = useState(checked);

  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');
  const disableClass = (disabled === true) ? ' a-toggle--disabled' : '';

  const onChangeWrap = () => {
    const check = !isChecked;
    setChecked(check);
    if (onChange) {
      onChange(check);
    }
  };

  return (
    <div className={`a-toggle ${disableClass}`}>
      <label htmlFor={inputId} id={labelId}>{label}</label>
      <input
        type="checkbox"
        id={inputId}
        checked={isChecked}
        aria-labelledby={labelId}
        onChange={onChangeWrap}
      />
      <span className="a-toggle__shape" />
      <label htmlFor={inputId} id={labelId}>{label}</label>
    </div>
  );
};

/**
 * Button control default props
 */
Toggle.defaultProps = {
  label: 'Toggle',
  checked: false,
  disabled: false,
  onChange: null,
};

/**
 * Button control prop types
 */
Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
