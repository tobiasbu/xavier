import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as Utils from '@utils';

import useStyle from './style';

/**
 * @typedef { import("./types").ToggleProps } ToggleProps
 */

/**
 * Astro Toggle.
 * @param {ToggleProps} props Properties
 */
const Toggle = (props) => {
  const {
    label, disabled, checked, onChange, secondaryLabel, className,
  } = props;

  const [isChecked, setChecked] = useState(checked);
  const classes = useStyle();

  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');
  const disableClass = (disabled === true) ? ' a-toggle--disabled ' : '';

  const onChangeWrap = () => {
    const check = !isChecked;
    if (onChange) {
      onChange(check);
    }
    setChecked(check);
  };

  return (
    <div className={`${className} a-toggle${disableClass}`}>
      <label htmlFor={inputId} id={labelId}>{label}</label>
      <input
        type="checkbox"
        id={inputId}
        checked={isChecked}
        aria-labelledby={labelId}
        onChange={onChangeWrap}
      />
      <span className="a-toggle__shape" />
      {
        secondaryLabel
        && (
        <label className={classes.secondary} htmlFor={inputId} id={labelId}>
          {secondaryLabel}
        </label>
        )
      }
    </div>
  );
};

/**
 * Toggle default props
 */
Toggle.defaultProps = {
  label: 'Toggle',
  secondaryLabel: null,
  className: '',
  checked: false,
  disabled: false,
  onChange: null,
};

/**
 * Toggle prop types
 */
Toggle.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  secondaryLabel: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
