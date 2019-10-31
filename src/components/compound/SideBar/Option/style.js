import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  optionWrapper: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 20,
    fontWeight: 500,
    color: '#32383c',
    padding: '1.25rem 3rem',
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    transition: 'color 0.2s ease 0s',
    cursor: 'pointer',
    borderBottom: '1px solid var(--color-space-200)',
    '&:hover': {
      color: 'var(--color-mars-400)',
    },
    '&:active': {
      color: 'var(--color-mars-600)',
    },
  },
  optionSelected: {
    color: 'var(--color-mars-500)',
    backgroundColor: 'var(--color-space-200)',
    '&:hover': {
      // backgroundColor: 'var(--color-space-300)',
      color: 'var(--color-mars-500)',
    },
  },
});

export default useStyle;
