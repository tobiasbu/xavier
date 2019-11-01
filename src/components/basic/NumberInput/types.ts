import * as React from 'react';
import { InputProps } from '../Input/types';

/**
 * Describe the input text properties.
 */
export interface NumberInputProps extends InputProps {
  /**
   * Step for increasing and decreeing value
   * @default 10
   */
  step?:number;
  /**
   * On control click.
   * Useful if you are using a text masking.
   * 
   * @return The new value.
   */
  onControlClick?: (current: React.ReactText, step: number) => React.ReactText;
  /**
   * Function to conform value.
   */
  conform?: (current: React.ReactText, inputValue: string) => React.ReactText;
};

/**
 * Describe control button props.
 */
export interface ControlButtonProps {
  /**
   * Is disabled?
   */
  disabled?: boolean,
  /**
   * Increase or decrease type?
   * - true: Increase
   * - false: Decrease
   */
  plusSign?: boolean,
  /**
   * On click event
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  /**
   * Aria label
   */
  ariaLabel: string,
}