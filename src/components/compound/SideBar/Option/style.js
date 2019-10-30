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
    transition: 'background-color 0.2s ease 0s',
    cursor: 'pointer',
    borderBottom: '1px solid var(--color-space-300)',
    '&:hover': {
      backgroundColor: 'var(--color-space-300)',
    },
    '&:active': {
      backgroundColor: 'var(--color-space-400)',
    },
  },
  optionSelected: {
    backgroundColor: 'var(--color-space-300)',
    '&:hover': {
      backgroundColor: 'var(--color-space-300)',
    },
  },
});

export default useStyle;
