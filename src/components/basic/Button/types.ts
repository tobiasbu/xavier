
/**
 * Astro colors
 */
type ButtonColor = 'uranus' | 'venus' | 'moon' | 'neptune' | 'mars';

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
}