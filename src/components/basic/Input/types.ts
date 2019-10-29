import * as React from 'react';

/**
 * Describe the input text properties.
 */
export interface InputProps {
  /**
   * Input label
   * @default 'Standard'
   */
  label?: string;
  /**
   * Default input value
   * @default ''
   */
  value?: string | number;
  /**
   * Is the input disabled?
   * @default false
   */
  disabled?: boolean;
  /**
   * Is this input validated?
   * 
   * - true: validated
   * - false: invalid
   * - null: none
   * @default null
   */
  validation?: boolean | null;
  /**
   * Placeholder text
   * @default null
   */
  placeholder?: string;
  /**
   * Reference of the real input DOM element.
   */
  forwardedRef?: React.Ref<HTMLInputElement>;
  /**
   * On input.
   */
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * On change.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};