import * as Utils from '@utils';

/**
 * Helper function to get Astro `<input>` validation class.
 *
 * @param {bool | undefined} validation Value
 */
export function getValidationClass(validation) {
  if (validation === true) {
    return ' a-input--validated';
  }
  if (validation === false) {
    return ' a-input--invalid';
  }
  return '';
}

/**
 * For `<input>` labels, should float at top?
 * Specific Astro behavior.
 *
 * @param {InputProps} props Input properties
 * @param {string} inputValue Current input value
 */
export function shouldLabelFloat(props, inputValue) {
  const {
    validation, placeholder,
  } = props;

  let validValue = false;
  if (Utils.isValid(inputValue)) {
    validValue = true;
    if (typeof inputValue === 'string') {
      validValue = inputValue.length > 0;
    }
  }

  return Utils.isValid(placeholder) || validation === true || validValue;
}
