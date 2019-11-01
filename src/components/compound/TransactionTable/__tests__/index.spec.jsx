import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import TransactionTable from '..';

describe('TransactionTable', () => {
  it('should render', () => {
    /**
     * @type {import('../../../../API').Transaction[]}
     */
    const transactions = [
      {
        debit: false,
        description: 'Olá',
        hash: '123456',
        timestamp: 1235461321,
        value: 50.50,
      },
      {
        debit: true,
        description: 'Tchau',
        hash: '7890123',
        timestamp: 3364879,
        value: 1081.50,
      },
    ];

    const component = shallow(<TransactionTable
      transactions={transactions}
      updateTransactions={() => { }}
    />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
