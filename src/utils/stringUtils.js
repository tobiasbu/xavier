import { isValid } from './valueEvaluation';

/**
 * Capitalize the first letter of given string.
 * @param {string} str The string to be capitalized.
 */
export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
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
  let convert = str;
  if (typeof str === 'number') {
    convert = str.toString(10);
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
 */
export function splitCurrency(str) {
  let convert = str;
  if (typeof str === 'number') {
    convert = str.toString(10);
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
    numerator = parseInt(numerator, 10);
  }

  let denominator = match[2] || '0';
  if (denominator) {
    denominator = parseInt(denominator, 10);
  }
  return {
    numerator,
    denominator,
  };
}