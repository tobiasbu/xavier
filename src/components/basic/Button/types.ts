
/**
 * Astro colors
 */
type ButtonColor = 'uranus' | 'venus' | 'moon' | 'neptune' | 'mars';

/**
 * Describe button properties
 */
export interface ButtonProps {
  color?: ButtonColor;
  children?: string;
}