/* eslint-disable react/prop-types */
import React from 'react';

import * as stringUtils from '@utils/stringUtils';
import * as API from '@API';

import ButtonIcon from '../../basic/ButtonIcon';


/**
 * Transaction table columns description
 */
export const columnsDescriptor = [
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
    width: 100,
  },
  {
    Header: () => null,
    id: 'remover',
    width: 100,
    Cell: ({ row, updateTransactions }) => {
      const { original } = row;
      return (
        <ButtonIcon
          icon="trash"
          onClick={
            () => {
              API.removeTransaction(original);
              updateTransactions();
            }
          }
          title={`Remover transação "${original.description}."`}
        />
      );
    },
  },
];

/**
 * Render a cell.
 * @param {any} cell The cel to be rendered
 */
export function renderCell(cell) {
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
