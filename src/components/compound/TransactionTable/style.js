import { createUseStyles } from 'react-jss';

import { capitalize } from '@utils/stringUtils';
import MediaQueries from '../../../style/mediaQueries';

export default createUseStyles({
  tableMain: {
    width: '100%',
    border: 'none',
    borderSpacing: '1px',
    borderCollapse: 'collapse',
  },
  tableHead: {
    border: 'none',
    borderSpacing: '1px',
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
    [MediaQueries.small]: {
      padding: '0.5rem',
    },
  },
  cellDescription: {
    width: '25%',
    [MediaQueries.small]: {
      width: 'auto',
    },
  },
  cellValue: {
    width: '25%',
    [MediaQueries.small]: {
      width: 'auto',
    },
  },
  cellRemover: {
    maxWidth: '48px',
    width: '10%',
  },
  cellDebit: {
    minWidth: '90px',
    width: '15%',
    [MediaQueries.small]: {
      minWidth: 'unset',
      width: 'auto',
    },
  },
});

export function getCellClassName(column) {
  const id = column.id || '';
  return `cell${capitalize(id)}`;
}
