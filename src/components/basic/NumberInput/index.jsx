import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useCallbackRef from '@utils/useCallbackRef';
import * as Utils from '@utils';
import * as commons from '../inputCommons';

import useStyle from '../Input/style';
import ControlButton from './ControlButton';

/**
 * @typedef { import("./types").NumberInputProps } NumberInputProps
 */

/**
 * Astro number input.
 *
 * Note: This is not very stable!
 * We need control when user inputs any character that is not digit.
 * Use <CurrencyInput />
 *
 * @param {NumberInputProps} props Number input Properties
 */
const NumberInput = (props) => {
  const {
    label, disabled, validation, placeholder, forwardedRef,
    onInput, onChange, onControlClick, onBlur,
    step, value, conform, errorMessage,
  } = props;

  // Hooks
  const classes = useStyle();
  const [isLabelFloating, setLabelFloat] = useState(commons.shouldLabelFloat(props, value));
  const [inputValue, setValue] = useState({ raw: value, conformed: value });
  const [elementRef, setRef] = useCallbackRef();
  // Make sure to conform first time!
  useEffect(() => {
    if (conform) {
      const r = conform(value);
      setValue(r);
    }
  }, [value]);

  // Class names
  const disabledClass = (disabled) ? ' a-input--disabled' : '';
  const validationClass = commons.getValidationClass(validation);
  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');


  // Events
  const onCtrlClick = (e, sign, focus = true) => {
    let conformedValue;
    let newVal;
    if (onControlClick) {
      newVal = onControlClick(inputValue, step * sign);
    } else {
      if (typeof conformedValue === 'string') {
        conformedValue = parseInt(inputValue, 10);
      }
      if (Number.isNaN(conformedValue)) {
        conformedValue = 0;
      }
      newVal = {
        raw: inputValue.raw + step * sign,
        conformed: inputValue.raw,
      };
    }

    if (Utils.isValid(elementRef) && focus) {
      elementRef.focus();
      elementRef.value = newVal.conformed;
      if (Utils.isValid(onChange)) {
        onChange(elementRef, newVal);
      }
    }
    setValue(newVal);
  };

  const onKeyUp = () => {
    if (Utils.isValid(elementRef)) {
      elementRef.focus();
    }
    const r = commons.shouldLabelFloat(props, inputValue);
    if (r !== isLabelFloating) {
      setLabelFloat(r);
    }
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 38) { // up
      onCtrlClick(1, false);
    } else if (e.keyCode === 40) { // down
      onCtrlClick(-1, false);
    }
  };

  const onChangeWrap = (e) => {
    let val;
    if (Utils.isValid(conform)) {
      val = conform(e.target.value);
    } else {
      val = {
        conformed: e.target.value,
        raw: inputValue.raw,
      };
    }
    if (Utils.isValid(onChange)) {
      onChange(e, val);
    }
    setValue(val);
  };

  return (
    <div className={`a-input a-input--control${disabledClass}${validationClass} ${classes.inputContainer}`}>
      <input
        type="text"
        value={inputValue.conformed}
        aria-labelledby={labelId}
        disabled={disabled}
        placeholder={placeholder}
        ref={(el) => {
          setRef(el);
          if (forwardedRef) {
            forwardedRef(el);
          }
        }}
        onInput={onInput}
        onChange={onChangeWrap}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyPress}
        onBlur={onBlur}
        id={inputId}
        name={label.toLowerCase()}
      />
      <label className={isLabelFloating ? 'a-input__label--floating' : ''} id={labelId} htmlFor={inputId}>
        {label}
      </label>
      <ControlButton disabled={disabled} onClick={(e) => onCtrlClick(e, -1)} ariaLabel="Incrementar valor" />
      <ControlButton plusSign disabled={disabled} onClick={(e) => onCtrlClick(e, 1)} ariaLabel="Decrementar valor" />
      <span className={`a-input__error ${classes.errorMessage}`} aria-live="polite">{errorMessage}</span>
    </div>
  );
};

/**
 * Input default props
 */
NumberInput.defaultProps = {
  label: 'Number Input',
  value: 0,
  step: 10,
  disabled: false,
  validation: null,
  errorMessage: '',
  placeholder: null,
  forwardedRef: null,
  onInput: null,
  onChange: null,
  onControlClick: null,
  onBlur: null,
  conform: null,
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
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onControlClick: PropTypes.func,
  onBlur: PropTypes.func,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
  conform: PropTypes.func,

};

export default NumberInput;
