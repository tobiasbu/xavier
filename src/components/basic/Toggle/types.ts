
/**
 * Describe the toggle properties.
 */
export interface ToggleProps {
  /**
   * Toggle label.
   */
  label: string,
  /**
   * Is toggle checked?
   */
  checked: boolean,
  /**
   * Is this toggle disabled?
   */
  disabled: boolean,
  /**
   * On toggle state change.
   */
  onChange: (checked: boolean) => void,
  /**
   * Second label.
   */
  secondaryLabel: string;
  /**
   * Additional class name.
   */
  className: string;
  /**
   * Forward reference function.
   */
  forwardedRef: (instance: HTMLInputElement) => void,
  /**
   * Toggle title.
   */
  title: string;

}