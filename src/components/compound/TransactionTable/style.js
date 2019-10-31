import { createUseStyles } from 'react-jss';

import { capitalize } from '@utils/stringUtils';

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
    borderTop: '1px solid var(--color-space-300)',
  },
  headerCell: {
    padding: '1rem',
    textAlign: 'left',
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
    wordBreak: 'break-word',
  },
  cellDescription: {
    width: '25%',
  },
  cellValue: {
    width: '25%',
  },
  cellRemover: {
    maxWidth: '80px',
    width: '10%',
  },
  cellDebit: {
    minWidth: '90px',
    width: '15%',
  },
});

export function getCellClassName(column) {
  const id = column.id || '';
  return `cell${capitalize(id)}`;
}
