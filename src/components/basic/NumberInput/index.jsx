import React, { useState } from 'react';
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
    step, defaultValue, errorMessage,
  } = props;

  // Hooks
  const classes = useStyle();
  const [isLabelFloating, setLabelFloat] = useState(commons.shouldLabelFloat(props, defaultValue));
  const [elementRef, setRef] = useCallbackRef();

  // Class names
  const disabledClass = (disabled) ? ' a-input--disabled' : '';
  const validationClass = commons.getValidationClass(validation);
  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');

  // Events
  const onCtrlClick = (e, sign, focus = true) => {
    if (Utils.isValid(elementRef)) {
      const { value } = elementRef;
      let newVal;
      if (onControlClick) {
        newVal = onControlClick(value, step * sign);
      } else {
        if (typeof value === 'string') {
          newVal = parseInt(value, 10);
        }
        if (Number.isNaN(value)) {
          newVal = 0;
        }
        newVal = value + step * sign;
      }
      elementRef.value = newVal;
      if (focus) {
        elementRef.focus();
        if (Utils.isValid(onChange)) {
          onChange(elementRef, newVal);
        }
      }
    }
  };

  const onKeyUp = () => {
    let elementValue;
    if (Utils.isValid(elementRef)) {
      elementRef.focus();
      elementValue = elementRef.value;
    }
    const r = commons.shouldLabelFloat(props, elementValue);
    if (r !== isLabelFloating) {
      setLabelFloat(r);
    }
  };

  const onChangeWrap = (e) => {
    let elementValue = 0;
    if (Utils.isValid(elementRef)) {
      elementValue = elementRef.value;
    }
    if (Utils.isValid(onChange)) {
      onChange(e, elementValue);
    }
  };

  return (
    <div className={`a-input a-input--control${disabledClass}${validationClass} ${classes.inputContainer}`}>
      <input
        type="text"
        defaultValue={defaultValue}
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
        onBlur={onBlur}
        id={inputId}
        name={label.toLowerCase()}
      />
      <label className={isLabelFloating ? 'a-input__label--floating' : ''} id={labelId} htmlFor={inputId}>
        {label}
      </label>
      <ControlButton disabled={disabled} onClick={(e) => onCtrlClick(e, -1)} ariaLabel="Decrementar valor" />
      <ControlButton plusSign disabled={disabled} onClick={(e) => onCtrlClick(e, 1)} ariaLabel="Incrementar valor" />
      <span className={`a-input__error ${classes.errorMessage}`} aria-live="polite">{errorMessage}</span>
    </div>
  );
};

/**
 * Input default props
 */
NumberInput.defaultProps = {
  label: 'Number Input',
  defaultValue: '',
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
};

/**
 * Input prop types
 */
NumberInput.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
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
};

export default NumberInput;
