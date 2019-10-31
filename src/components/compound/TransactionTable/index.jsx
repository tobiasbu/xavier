import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import * as API from '../../../api';

const columnsDescriptor = [
  {
    Header: 'Name',
  },
  {
    Header: 'Descrição',
  },
];

/**
 * Transaction table using `useTable` hook.
 * @param {*} props 
 */
const TransactionTable = (props) => {
  const { noRegisterRender } = props;

  const columns = useMemo(() => columnsDescriptor);
  const data = useMemo(API.getTransactions);
  const { rows, headers } = useTable({
    columns,
    data,
  });

  if (data.length <= 0) {
    if (noRegisterRender) {
      return noRegisterRender();
    }
    return (
      <p>
        {
          ['Você ainda não cadastrou ',
            <strong>
              nenhuma transação
            </strong>,
            '.']
        }
      </p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((column) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {rows.map(
          (row, i) =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
        )} */}
      </tbody>
    </table>
  );
};

TransactionTable.defaultProps = {
  noRegisterRender: null,
};

TransactionTable.propTypes = {
  noRegisterRender: PropTypes.func,
};

export default TransactionTable;
