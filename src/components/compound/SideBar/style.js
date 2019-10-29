import jss from 'jss';

const style = jss.createStyleSheet({
  sidebarWrapper: {
    width: 320,
    position: 'relative',
    backgroundColor: 'var(--color-space-200)',
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
  },
});

export default style;
