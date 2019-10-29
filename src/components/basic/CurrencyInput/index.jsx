import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import NumberInput from '../NumberInput';


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

const CurrencyInput = (props) => {
  const { disabled, label } = props;

  return (
    <MaskedInput
      mask={numberMask}
      placeholder="R$ 0,00"
      render={(ref, inputProps) => (
        <NumberInput
          label={label}
          forwardedRef={ref}
          disabled={disabled}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...inputProps}
        />
      )}
    />
  );
};

CurrencyInput.propTypes = { ...NumberInput.propTypes };

CurrencyInput.defaultProps = { value: null, ...NumberInput.defaultProps };

export default CurrencyInput;
