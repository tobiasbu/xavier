import createNumberMask from 'text-mask-addons/dist/createNumberMask';

/**
 * Currency number mask
 */
const numberMask = createNumberMask({
  prefix: 'R$ ',
  decimalSymbol: ',',
  requireDecimal: false,
  allowDecimal: true,
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '.',
  decimalLimit: 2,
  integerLimit: 10,
});

const numberMaskWithThousands = createNumberMask({
  prefix: 'R$ ',
  decimalSymbol: ',',
  requireDecimal: false,
  allowDecimal: true,
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  decimalLimit: 2,
  integerLimit: 10,
});

export {
  numberMask,
  numberMaskWithThousands,
};
