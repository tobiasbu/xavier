import React from 'react';
import MaskedInput from 'react-text-mask';
import { conformToMask } from 'text-mask-core';

import * as Utils from '@utils';

import NumberInput from '../NumberInput';
import numberMask from '../../commons';

/**
 * Click on control button.
 * @param {NumberInputState} inputValue Input state
 * @param {number} step The state do modify
 */
function onControlClick(state, step) {
  // After a good time dealing with text mask...
  // I just figure out that is annoying to treat edge cases like that.
  // My idea for a 'raw' version of the conformed mask version is mess.
  // We should change this in future urgently.
  let newValue = Utils.str.currencyToFloat(state.conformed) + step;
  if (newValue < 0) {
    newValue = 0;
  }
  const r = conformToMask(Utils.str.toCurrency(newValue), numberMask, state.conformed);
  return {
    raw: newValue,
    conformed: r.conformedValue,
  };
}

/**
 * Convert conformed value to a new input state.
 * @param {NumberInputState | React.Text} state The input state or value.
 */
function conformValue(state) {
  let str = '0';
  const type = typeof state;
  if (type === 'object') {
    const { conformed } = state;
    if (Utils.isValid(conformed)) {
      str = conformed;
    }
  } else if (type === 'string') {
    str = state;
    if (state.length < 0) {
      str = '0';
    }
  }

  const c = Utils.str.getCurrency(str);
  const r = conformToMask(c, numberMask, str);

  return {
    raw: Utils.str.currencyToFloat(c),
    conformed: r.conformedValue,
  };
}

/**
 * Currency input.
 * At the moment this input only accept Reais (R$) currency.
 * This is totally a mess.
 * @param {any} props Currency input props
 */
const CurrencyInput = (props) => {
  const {
    disabled, label, forwardedRef, validation, errorMessage, onChange, value,
  } = props;

  return (
    <MaskedInput
      mask={numberMask}
      placeholder="R$ 0,00"
      render={(ref, inputProps) => {
        const maskedProps = inputProps;

        return (
          <NumberInput
            label={label}
            value={value}
            step={100}
            disabled={disabled}
            validation={validation}
            errorMessage={errorMessage}
            onControlClick={onControlClick}
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
            conform={conformValue}
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
CurrencyInput.defaultProps = { value: null, ...NumberInput.defaultProps };

export default CurrencyInput;
