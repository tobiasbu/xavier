import React, { useState } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

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
    label, disabled, checked, onChange, secondaryLabel, className, forwardedRef, title,
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

  let name = `${(label || '')}`;
  if (secondaryLabel) {
    name = `${name}-${(secondaryLabel || '')}`;
  }

  return (
    <div className={`a-toggle mars-neptune ${disableClass}${className}`}>
      <label htmlFor={inputId} id={labelId}>{label}</label>
      <input
        type="checkbox"
        id={inputId}
        checked={isChecked}
        aria-labelledby={labelId}
        onChange={onChangeWrap}
        name={slugify(name, { lower: true })}
        ref={forwardedRef}
        aria-checked={isChecked}
        title={title}
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
  forwardedRef: null,
  onChange: null,
};

/**
 * Toggle prop types
 */
Toggle.propTypes = {
  label: PropTypes.string,
  // https://www.davidmacd.com/test/wave-checkbox-aria.html
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  secondaryLabel: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  forwardedRef: PropTypes.func,
  onChange: PropTypes.func,
};

export default Toggle;
