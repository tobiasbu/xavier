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
   */
  onControlClick?: (current: string | number, step: number) => number;
};
