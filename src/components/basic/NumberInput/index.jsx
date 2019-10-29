import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import * as Utils from '@utils';
import * as commons from '../commons';

import useStyle from '../Input/style';
import ControlButton from './ControlButton';

/**
 * @typedef { import("./types").NumberInputProps } NumberInputProps
 */

/**
 * Astro number input.
 *
 * I should create a component of this too.
 *
 * @param {NumberInputProps} props Number input Properties
 */
const NumberInput = (props) => {
  const {
    label, disabled, validation, placeholder, forwardedRef,
    onInput, onChange, onControlClick, step, value,
  } = props;

  // Hooks
  let ref = forwardedRef;
  if (!Utils.isValid(forwardedRef)) {
    ref = useRef(null);
  }
  const classes = useStyle();
  const [isLabelFloating, setLabelFloat] = useState(commons.shouldLabelFloat(props, value));
  const [inputValue, setValue] = useState(value);

  // Class names
  const disabledClass = (disabled) ? ' a-input--disabled' : '';
  const validationClass = commons.getValidationClass(validation);
  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');

  // Events
  const onCtrlClick = (sign) => {
    let val = inputValue;
    if (onControlClick) {
      val = onControlClick(val, step * sign);
    } else {
      val = inputValue;
      if (typeof inputValue === 'string') {
        val = parseInt(inputValue, 10);
      }
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(val)) {
        val = 0;
      }
      val += step * sign;
    }
    setValue(val);
    if (Utils.isValid(ref)) {
      if (ref.current) {
        ref.current.focus();
      }
    }
  };

  const onKeyUp = () => {
    if (Utils.isValid(ref)) {
      if (ref.current) {
        ref.current.focus();
      }
    }
    const r = commons.shouldLabelFloat(props, inputValue);
    setLabelFloat(r);
  };

  const onChangeWrap = (e) => {
    if (Utils.isValid(onChange)) {
      onChange(e);
    }
    setValue(e.target.value);
  };

  return (
    <div className={`a-input a-input--control${disabledClass}${validationClass} ${classes.inputContainer}`}>
      <input
        type="text"
        value={inputValue}
        aria-labelledby={labelId}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        onInput={onInput}
        onChange={onChangeWrap}
        onKeyUp={onKeyUp}
        id={inputId}
      />
      <label className={isLabelFloating ? 'a-input__label--floating' : ''} id={labelId} htmlFor={inputId}>
        {label}
      </label>
      <ControlButton disabled={disabled} onClick={() => onCtrlClick(-1)} ariaLabel="Incrementar valor" />
      <ControlButton plusSign disabled={disabled} onClick={() => onCtrlClick(1)} ariaLabel="Decrementar valor" />
    </div>
  );
};

/**
 * Input default props
 */
NumberInput.defaultProps = {
  label: 'Number Input',
  value: '',
  step: 10,
  disabled: false,
  validation: null,
  placeholder: null,
  forwardedRef: null,
  onInput: null,
  onChange: null,
  onControlClick: null,
};

/**
 * Input prop types
 */
NumberInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  step: PropTypes.number,
  disabled: PropTypes.bool,
  validation: PropTypes.bool,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onControlClick: PropTypes.func,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
};

export default NumberInput;
