import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  infoBox: {
    margin: '0 0 2.5rem',
  },
  fancyBalance: {
    borderRadius: '3px',
    background: 'var(--gradient-mayall)',
    padding: '1rem',
    color: 'white !important',
  },
});

export default useStyle;
