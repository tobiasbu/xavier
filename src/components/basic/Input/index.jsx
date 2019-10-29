import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import * as Utils from '@utils';
import * as commons from '../commons';

import useStyle from './style';

/**
 * @typedef { import("./types").InputProps } InputProps
 */

/**
 * Astro standard input.
 *
 * I should probably create a component...
 *
 * @param {InputProps} props Properties
 */
const Input = (props) => {
  const {
    label, value, disabled, validation, placeholder, forwardedRef, onInput, onChange,
  } = props;

  const classes = useStyle();
  const [isLabelFloating, setLabelFloat] = useState(commons.shouldLabelFloat(props));

  let ref = forwardedRef;
  if (!Utils.isValid(ref)) {
    ref = useRef(null);
  }

  const disabledClass = (disabled) ? ' a-input--disabled' : '';
  const validationClass = commons.getValidationClass(validation);

  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');

  const onKeyUp = () => {
    const r = commons.shouldLabelFloat(props, ref.current.value);
    setLabelFloat(r);
  };

  return (
    <div className={`a-input${disabledClass}${validationClass} ${classes.inputContainer}`}>
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        disabled={disabled}
        onInput={onInput}
        onChange={onChange}
        onKeyUp={onKeyUp}
        ref={ref}
        id={inputId}
        aria-labelledby={labelId}
      />
      <label className={isLabelFloating ? 'a-input__label--floating' : ''} id={labelId} htmlFor={inputId}>{label}</label>
    </div>
  );
};

/**
 * Input default props
 */
Input.defaultProps = {
  label: 'Standard',
  value: '',
  disabled: false,
  validation: null,
  placeholder: null,
  forwardedRef: null,
  onInput: null,
  onChange: null,
};

/**
 * Input prop types
 */
Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  validation: PropTypes.bool,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
};

export default Input;
