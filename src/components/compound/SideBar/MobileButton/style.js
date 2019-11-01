import { createUseStyles } from 'react-jss';
import MediaQueries from '../../../../style/mediaQueries';

export default createUseStyles({
  mobileButton: {
    cursor: 'pointer',
    position: 'absolute',
    width: 42,
    height: 42,
    top: '0.75rem',
    left: '0.65rem',
    outline: 'currentcolor none medium',
    border: 'medium none',
    padding: '8px 2px !important',
    display: 'none',
    zIndex: 15,
    [MediaQueries.large]: {
      display: 'block',
    },
    [MediaQueries.largeUp]: {
      display: 'none !important',
    },
  },
  mobileIcon: {
    fontSize: '28px !important',
    margin: '-8px 0 -2px !important',
  },
  mobileClose: {
    left: '19.25rem',
  },
});
