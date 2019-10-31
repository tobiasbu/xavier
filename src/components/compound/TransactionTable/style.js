import { createUseStyles } from 'react-jss';

export default createUseStyles({
  tableMain: {
    width: '100%',
    border: 'none',
    borderSpacing: 2,
    borderCollapse: 'collapse',
  },
  tableHead: {
    border: 'none',
    borderSpacing: 2,
    borderCollapse: 'collapse',
    borderBottom: '1px solid var(--color-space-300)',
  },
  headerCell: {
    padding: '1rem',
    textAlign: 'left',
    // backgroundColor: 'var(--color-neptune-100)',
    textTransform: 'uppercase',
    fontWeight: 600,
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  },
  rowCell: {
    padding: '1.5rem 1rem',
    fontWeight: 500,
    fontFamily: 'Lato, sans-serif',
    borderBottom: '1px solid var(--color-space-300)',
  },
});
