

/**
 * Describe button properties
 */
export interface ButtonIconProps {
  /**
   * Button type
   * @todo Add more icon options...
   */
  icon: 'trash';
  /**
   * Button title.
   */
  title: string;
  /**
   * Aria-label
   */
  ariaLabel: string;
  /**
   * On click event
   */
  onClick: React.MouseEventHandler<HTMLElement>;
}