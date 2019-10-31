/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import * as stringUtils from '@utils/stringUtils';
import * as API from '@API';

import useStyle from './style';

const columnsDescriptor = [
  {
    Header: 'Descrição',
    accessor: 'description',
  },
  {
    Header: 'Valor',
    accessor: 'value',
  },
  {
    Header: 'Tipo',
    accessor: 'debit',
  },
  {
    Header: () => null,
    id: 'remover',
    // eslint-disable-next-line react/prop-types
    Cell: () => (
      // eslint-disable-next-line react/prop-types
      <button className="a-btn a-btn--ghost-mars a-btn--medium a-btn--icon" type="button">
        <i className="a-icon a-icon--trash a-icon--size-medium" />
      </button>
    ),
  },
];


function renderCell(cell) {
  const { index } = cell.column;
  const { value } = cell;
  switch (index) {
    default:
    case 0: return value;
    case 1: return stringUtils.toCurrency(value);
    case 2: return (value) ? 'Débito' : 'Crédito';
    case 3: return cell.render('Cell');
  }
}

/**
 * Transaction table using `useTable` hook.
 * @param {*} props Properties
 */
const TransactionTable = (props) => {
  const { noRegisterRender } = props;

  const columns = useMemo(() => columnsDescriptor);
  const data = useMemo(API.getTransactions);
  const { rows, headers, prepareRow } = useTable({
    columns,
    data,
  });

  const classes = useStyle();

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
    <table className={classes.tableMain}>
      <thead className={classes.tableHead}>
        <tr>
          {headers.map((column) => (
            <th {...column.getHeaderProps()} className={classes.headerCell}>{column.render('Header')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const el = prepareRow(row)
            || (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={classes.rowCell}>
                    {renderCell(cell, row)}
                  </td>
                ))}
              </tr>
            );
          return el;
        })}
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
