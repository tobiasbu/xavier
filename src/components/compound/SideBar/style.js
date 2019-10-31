import jss from 'jss';
import MediaQueries from '../../../style/mediaQueries';

const style = jss.createStyleSheet({
  sidebarWrapper: {
    width: 320,
    position: 'relative',
    [MediaQueries.large]: {
      display: 'none',
    },
  },

  sidebarContent: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    minWidth: 320,
    height: '100%',
    maxHeight: '100vh',
    backgroundColor: 'inherit',
    borderRight: '1px solid var(--color-space-300)',
  },
});

export default style;
