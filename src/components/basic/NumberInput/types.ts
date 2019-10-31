import * as React from 'react';
import { InputProps } from '../Input/types';

export interface NumberInputState {
  raw: number,
  conformed: string | number;
}

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
  onControlClick?: (current: NumberInputState, step: number) => NumberInputState;
  /**
   * Function to conform value.
   */
  conform?: (current: NumberInputState, inputValue: string) => NumberInputState;
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