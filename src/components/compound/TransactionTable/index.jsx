/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import useStyle, { getCellClassName } from './style';
import { columnsDescriptor, renderCell } from './structure';


/**
 * Transaction table using `useTable` hook.
 * @param {*} props Properties
 */
const TransactionTable = (props) => {
  const { transactions, updateTransactions } = props;

  const columns = useMemo(() => columnsDescriptor);
  // const [data, setData] = React.useState(transactions.reverse());
  const data = transactions;

  const { rows, headers, prepareRow } = useTable({
    columns,
    data,
    updateTransactions,
  });

  const classes = useStyle();

  if (data.length <= 0) {
    return null;
  }

  return (
    <table className={classes.tableMain}>
      <thead className={classes.tableHead}>
        <tr>
          {headers.map((column) => {
            const cellClass = classes[getCellClassName(column)] || '';
            return (
              <th
                {...column.getHeaderProps()}
                className={`${classes.headerCell} ${cellClass}`}
              >
                {column.render('Header')}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const el = prepareRow(row)
            || (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellClass = classes[getCellClassName(cell.column)] || '';
                  return (
                    <td {...cell.getCellProps()} className={`${classes.rowCell} ${cellClass}`}>
                      {renderCell(cell)}
                    </td>
                  );
                })}
              </tr>
            );
          return el;
        })}
      </tbody>
    </table>
  );
};

/**
 * Transaction table prop types
 */
TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTransactions: PropTypes.func.isRequired,
};

export default TransactionTable;
