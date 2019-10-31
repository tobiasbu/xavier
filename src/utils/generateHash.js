
import hashFunc from 'murmurhash-js';
import { capitalize } from './stringUtils';

/**
 * Class name generator like Aphrodite.
 *
 * Currently `react-jss` is not supporting custom class name generator (bug?)
 * @param {any} rule Class name
 * @param {suffix} sheet Stylesheet
 */
export function generateHash(key, suffix = '', withTime = false, toHex = true) {
  const time = (withTime) ? Date.now() : '';
  const hash = `${suffix}${hashFunc(`${key}${JSON.stringify(key)}${time}`)}`;
  if (toHex) {
    return hash.toString(16);
  }
  return hash;
}


/**
 * Class name generator like Aphrodite.
 * @param {any} rule  StyleRule
 * @param {any} _sheet StyleSheet
 */
// eslint-disable-next-line no-unused-vars
export function generateId(rule, _sheet) {
  return `m_${capitalize(rule.key.substr(0, 4))}__${generateHash(`${rule.key}`, undefined, true)}`;
}
