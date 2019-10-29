import * as Utils from '@utils';

/**
 * Class name generator like Aphrodite.
 * @param {any} rule  StyleRule
 * @param {any} _sheet StyleSheet
 */
// eslint-disable-next-line no-unused-vars
export default function generateId(rule, _sheet) {
  return `m_${Utils.str.capitalize(rule.key.substr(0, 4))}__${Utils.generateHash(`${rule.key}`, undefined, true)}`;
}
