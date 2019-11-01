

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
   * Aria-lable
   */
  ariaLabel: string;

  onClick: React.MouseEventHandler<HTMLElement>;
}