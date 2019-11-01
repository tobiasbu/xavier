import { conformToMask } from 'text-mask-core';
import { numberMaskWithThousands, numberMask } from '../components/commons';

import { isValid } from './valueEvaluation';

/**
 * Capitalize the first letter of given string.
 * @param {string} str The string to be capitalized.
 */
export function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get file extension.
 * @param {string} filename File name
 */
export function getExtension(filename) {
  const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || '';
  return ext.toLowerCase();
}

/**
 * Get safely a route
 * @param {string} url Location url.
 */
export function getRoute(url) {
  if (url === '/') {
    return url;
  }

  let newPath = '';
  const pathArray = window.location.pathname.split('/');
  for (let i = 0; i < pathArray.length; i += 1) {
    newPath += `/${pathArray[i]}/`;
  }
  return newPath;
}

/**
 * Get a converted currency in a format that text mask can understand.
 * @param {string | number} str The value.
 */
export function getCurrency(str) {
  let convert;
  if (typeof str === 'number') {
    convert = str.toString(10);
  } else {
    // ts checks again...
    convert = str;
  }
  const match = /([0-9.]*)(?:,(\d*))?$/i.exec(convert);
  if (!isValid(match)) {
    return '00,00';
  }
  const numerator = match[1].replace('.', '');
  const frac = match[2];
  let raw = numerator || '0';
  if (frac) {
    raw = `${raw},${frac}`;
  }
  return raw;
}

/**
 * Split a currency value into `denominator` and `numerator` parts.
 * @param {string | number} str The currency
 * @return { {numerator: number, denominator: number  }}
 */
export function splitCurrency(str) {
  let convert = str;
  if (typeof str === 'number') {
    convert = str.toString(10);
  } else {
    // ts checks again...
    convert = str;
  }
  const match = /([0-9.]*)(?:,(\d*))?$/i.exec(convert);
  if (!isValid(match)) {
    return {
      numerator: 0,
      denominator: 0,
    };
  }
  let numerator = match[1].replace('.', '') || '0';
  if (numerator) {
    // @ts-ignore
    numerator = parseInt(numerator, 10);
  }

  let denominator = match[2] || '0';
  if (denominator) {
    // @ts-ignore
    denominator = parseInt(denominator, 10);
  }
  return {
    numerator,
    denominator,
  };
}

/**
 * Convert currency string to float value
 * @param {string} str Currency
 */
export function currencyToFloat(str) {
  const match = /([0-9.]*)(?:,(\d*))?$/i.exec(str);
  if (!isValid(match)) {
    return 0;
  }
  let numerator = match[1].replace(/\./g, '');
  if (numerator) {
    numerator = parseInt(numerator, 10);
  }

  let denominator = match[2] || '0';
  if (denominator) {
    denominator = parseInt(denominator, 10);
  }

  return parseFloat(`${numerator}.${denominator}`);
}

/**
 * Convert string or number to valid currency (R$ only)
 * @param {string | number} value Value to convert
 * @param {boolean} thousands Include thousands symbol?
 */
export function toCurrency(value, thousands = true) {
  const type = typeof value;
  let str = value;
  let numer = str;
  let denom = '';
  if (type === 'number') {
    str = value.toString();
    const split = str.split('.');
    [numer, denom] = split;
  }
  if (!numer) {
    numer = '0';
  }
  if (!denom || denom.length <= 0) {
    denom = '00';
  }
  if (denom.length === 1) {
    denom = `${denom}0`;
  }

  let r;
  if (thousands) {
    r = conformToMask(`R$ ${numer},${denom}`, numberMaskWithThousands);
  } else {
    r = conformToMask(`R$ ${numer},${denom}`, numberMask);
  }

  return r.conformedValue;
}
