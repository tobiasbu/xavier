
import hashFunc from 'murmurhash-js';
import { capitalize } from './stringUtils';

/**
 * Class name generator like Aphrodite.
 *
 * Currently `react-jss` is not supporting custom class name generator (bug?)
 * Update: Fixed...
 * @param {any} key Class name
 * @param {string} suffix suffix
 */
export function generateHash(key, suffix = '', withTime = false, toHex = true) {
  const time = (withTime) ? Date.now() : '';
  /**
   * @type {string | number}
   */
  let mur = hashFunc(`${key}${JSON.stringify(key)}${time}`);
  if (toHex) {
    mur = mur.toString(16);
  }
  const hash = `${suffix}${mur}`;
  return hash;
}


/**
 * Class name generator like Aphrodite for Xavier project.
 * @param {any} rule  StyleRule
 * @param {any} _sheet StyleSheet
 */
// eslint-disable-next-line no-unused-vars
export function generateId(rule, _sheet, seed) {
  return `_x_${capitalize(rule.key.substr(0, 4))}__${generateHash(rule.key, undefined, true)}`;
}
