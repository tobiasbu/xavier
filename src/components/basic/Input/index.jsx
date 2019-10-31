import React, { useState } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import useCallbackRef from '@utils/useCallbackRef';
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
    label, value, disabled, required, validation, placeholder, forwardedRef,
    errorMessage, onInput, onChange,
  } = props;

  const classes = useStyle();
  const [isLabelFloating, setLabelFloat] = useState(commons.shouldLabelFloat(props));
  const [elementRef, setRef] = useCallbackRef();
  const disabledClass = (disabled) ? ' a-input--disabled' : '';
  const validationClass = commons.getValidationClass(validation);

  const inputId = Utils.generateHash(props, 'm-i-');
  const labelId = Utils.generateHash(props, 'm-l-');

  const onKeyUp = () => {
    const r = commons.shouldLabelFloat(props, elementRef);
    if (isLabelFloating === r) {
      return;
    }
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
        id={inputId}
        aria-labelledby={labelId}
        required={required}
        aria-required={required ? 'true' : 'false'}
        name={label ? slugify(label, { lower: true }) : ''}
        ref={(e) => {
          if (forwardedRef) {
            forwardedRef(e);
          }
          setRef(e);
        }}
      />
      <label
        className={isLabelFloating ? 'a-input__label--floating' : ''}
        id={labelId}
        htmlFor={inputId}
      >
        {label}
      </label>
      <span className={`a-input__error ${classes.errorMessage}`}>{errorMessage}</span>
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
  required: false,
  validation: null,
  errorMessage: '',
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
  required: PropTypes.bool,
  validation: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
};

export default Input;
