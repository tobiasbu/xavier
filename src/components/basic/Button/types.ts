
/**
 * Astro colors
 */
type ButtonColor = 'uranus' | 'venus' | 'moon' | 'neptune' | 'mars' | 'earth';

/**
 * Describe button properties
 */
export interface ButtonProps {
  /**
   * Button color
   */
  color?: ButtonColor;
  /**
   * Button text
   */
  children?: string;
  /**
   * Custom class name for button container.
   */
  className?: string;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Button title.
   */
  title: string;

  disabled: boolean;
}