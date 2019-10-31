import { splitCurrency } from '@utils/stringUtils';

/**
 * Currency validation
 * @param {string} current
 */
export function validateCurrency(current) {
  const r = splitCurrency(current);
  if (r.denominator === 0 && r.numerator === 0) {
    return '"Zero" reais não existe :P. Por favor insira um valor válido.';
  }
  return true;
}

/**
 * Description validation
 * @param {string} desc
 */
export function validateDescription(desc) {
  const len = desc.length;
  if (len === 1) {
    return 'Hum. Descreva melhor sua transação.';
  }
  return true;
}

/**
 * Check form errors.
 * @param {Object} error Error object.
 * @param {string} defaultErrorMessage Default error message.
 */
export function checkError(error, defaultErrorMessage = '') {
  if (!error) {
    return {
      message: '',
      valid: null,
    };
  }
  let msg = error.message;
  msg = msg.length > 0 ? msg : defaultErrorMessage;
  return {
    valid: false,
    message: msg,
  };
}
