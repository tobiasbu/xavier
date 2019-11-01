import React from 'react';
import MaskedInput from 'react-text-mask';
import { conformToMask } from 'text-mask-core';

import * as stringUtils from '@utils/stringUtils';

import NumberInput from '../NumberInput';
import { numberMask } from '../../commons';

/**
 * Click on control button.
 * @param {string} state Input state
 * @param {number} step The state do modify
 */
function onControlClick(state, step) {
  let newValue = stringUtils.currencyToFloat(state) + step;
  if (newValue <= 0) {
    newValue = 0;
  }
  const r = conformToMask(stringUtils.toCurrency(newValue, false), numberMask, state);
  if (!r) {
    return 'R$ 0,00';
  }
  return r.conformedValue || 0;
}

/**
 * Currency input.
 * At the moment this input only accept Reais (R$) currency.
 * This is totally a mess.
 * @param {any} props Currency input props
 */
const CurrencyInput = (props) => {
  const {
    disabled, label, forwardedRef, validation, errorMessage, onChange, defaultValue,
  } = props;

  return (
    <MaskedInput
      mask={numberMask}
      guide
      render={(ref, inputProps) => {
        const maskedProps = inputProps;

        return (
          <NumberInput
            label={label}
            defaultValue={defaultValue}
            step={100}
            disabled={disabled}
            validation={validation}
            errorMessage={errorMessage}
            onControlClick={onControlClick}
            placeholder="R$ 0,00"
            onChange={(e, newVal) => {
              maskedProps.onChange(e);
              if (onChange) {
                onChange(e, newVal);
              }
            }}
            forwardedRef={(e) => {
              ref(e);
              if (forwardedRef) {
                forwardedRef(e);
              }
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            onBlur={maskedProps.onBlur}
          />
        );
      }}
    />
  );
};

/**
 * Currency prop types.
 * Same as the number input.
 */
CurrencyInput.propTypes = { ...NumberInput.propTypes };

/**
 * Currency default props.
 */
CurrencyInput.defaultProps = { ...NumberInput.defaultProps };

export default CurrencyInput;
