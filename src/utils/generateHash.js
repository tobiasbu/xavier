
import hash from 'murmurhash-js';

/**
 * Class name generator like Aphrodite.
 *
 * Currently `react-jss` is not supporting custom class name generator (bug?)
 * @param {any} rule Class name
 * @param {suffix} sheet Stylesheet
 */
export default function generateHash(key, suffix = '', withTime = false) {
  const time = (withTime) ? Date.now() : '';
  return `${suffix}${hash(`${key}${JSON.stringify(key)}${time}`).toString(16)}`;
}
