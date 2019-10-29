
/**
 * Get a valid `value`.
 * If value is null or undefined will return `defaultValue`.
 * @param {any} value Value
 * @param {any | undefined} defaultValue Default value
 */
export function getValue(value, defaultValue) {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return value;
}

export function isValid(value) {
  return (value !== null && value !== undefined);
}
