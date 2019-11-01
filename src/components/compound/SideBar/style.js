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
    maxHeight: '100vh',
    backgroundColor: 'white',
    borderRight: '1px solid var(--color-space-300)',
    transition: '0.15s ease transform',
    transform: 'translateX(0%)',
    [MediaQueries.large]: {
      transform: 'translateX(-100%)',
    },
    zIndex: 20,
  },
  openContent: {
    transform: 'translateX(0%)',
  },
  sidebarMainMenu: {
    [MediaQueries.large]: {
      display: 'none',
    },
  },
  openMainMenu: {
    display: 'block !important',
  },
  backgroundMenu: {
    backgroundColor: 'black',
    opacity: 0.5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 10,
    display: 'none',
    [MediaQueries.largeUp]: {
      display: 'none !important',
    },
  },
});

export default style;
