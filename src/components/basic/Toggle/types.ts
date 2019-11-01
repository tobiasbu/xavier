
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

  secondaryLabel: string;
  className: string;
  forwardedRef: (instance: HTMLInputElement) => void,
  title: string;

}