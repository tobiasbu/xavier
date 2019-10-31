import React from 'react';
import MaskedInput from 'react-text-mask';
import { conformToMask } from 'text-mask-core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import NumberInput from '../NumberInput';
import * as Utils from '@utils';


// First, you need to create the `numberMask` with your desired configurations
const numberMask = createNumberMask({
  prefix: 'R$ ',
  decimalSymbol: ',',
  requireDecimal: true,
  allowDecimal: true,
  thousandsSeparatorSymbol: '.',
  decimalLimit: 2,
  integerLimit: 16,
});

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
  let newRaw = state.raw + step;
  if (newRaw < 0) {
    newRaw = 0;
  }
  const frac = /(?:,(\d*))?$/i.exec(state.conformed);
  let rawStr = `${newRaw}`;
  if (frac && frac[1]) {
    rawStr = `${rawStr},${frac[1]}`;
  }
  const r = conformToMask(rawStr, numberMask, state.conformed);
  return {
    raw: newRaw,
    conformed: r.conformedValue,
  };
}

/**
 * Convert conformed value to a new input state.
 * @param {NumberInputState | React.Text} state The input state or value.
 */
function conformedToRaw(state) {
  let str = '0';
  if (typeof state === 'object') {
    const { conformed } = state;
    if (Utils.isValid(conformed)) {
      str = conformed;
    }
  } else {
    str = state;
  }

  const c = Utils.str.getCurrency(str);
  const r = conformToMask(c, numberMask, str);

  return {
    raw: parseInt(c, 10),
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
            onChange={(e) => {
              maskedProps.onChange(e);
              if (onChange) {
                onChange(e);
              }
            }}
            forwardedRef={(e) => {
              ref(e);
              if (forwardedRef) {
                forwardedRef(e);
              }
            }}
            conform={conformedToRaw}
            
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
