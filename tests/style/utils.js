import { create } from 'jss';
import jssPreset from 'jss-preset-default';

/**
 * Helper function to create a JSS instance.
 */
function createJSS() {
  const styles = create(jssPreset());
  styles.setup({
    Renderer: null,
  });
  return styles;
}

export default {
  createJSS,
};
