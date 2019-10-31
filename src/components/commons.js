import createNumberMask from 'text-mask-addons/dist/createNumberMask';

/**
 * Currency number mask
 */
const numberMask = createNumberMask({
  prefix: 'R$ ',
  decimalSymbol: ',',
  requireDecimal: true,
  allowDecimal: true,
  thousandsSeparatorSymbol: '.',
  decimalLimit: 2,
  integerLimit: 10,
});

export default numberMask;
