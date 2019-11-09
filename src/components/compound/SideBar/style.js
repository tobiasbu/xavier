import jss from 'jss';
import MediaQueries from '../../../style/mediaQueries';

const style = jss.createStyleSheet({
  sidebarWrapper: {
    width: 300,
    position: 'relative',
    [MediaQueries.large]: {
      width: 0,
    },
  },
  sidebarContent: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    minWidth: 300,
    height: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
    borderRight: '1px solid var(--color-space-300)',
    transition: '0.15s ease transform',
    transform: 'translateX(0%)',
    [MediaQueries.large]: {
      transform: 'translateX(-100%)',
    },
    zIndex: 20,
  },
  sidebarOptionsContainer: {
    overflowY: 'auto',
    flex: '1 1 0%',
  },
  openContent: {
    transform: 'translateX(0%)',
  },
  sidebarMainMenu: {
    display: 'flex !important',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    [MediaQueries.large]: {
      display: 'none',
    },
  },
  openMainMenu: {
    display: 'flex !important',
  },
  backgroundMenu: {
    backgroundColor: 'black',
    opacity: 0.5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    zIndex: 10,
    display: 'none',
    [MediaQueries.largeUp]: {
      display: 'none !important',
    },
  },
});

export default style;
