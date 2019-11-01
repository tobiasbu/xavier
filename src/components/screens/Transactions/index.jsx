import React from 'react';
import { store } from 'react-notifications-component';

import * as stringUtils from '@utils/stringUtils';
import * as API from '@API';

import Content from '../../container/Content';
import Header from '../../container/Header';

import TransactionTable from '../../compound/TransactionTable';

import { Balance, OperationInfo, NoRegister } from './MetaElements';
import useStyle from './style';

/**
 * Transactions screen.
 */
const Transactions = () => {
  const [transactions, setTransactions] = React.useState(API.getTransactions().reverse());
  const classes = useStyle();

  const updateMyData = (trans) => {
    setTransactions(API.getTransactions().reverse());
    if (trans) { // Fancy
      store.addNotification({
        title: 'Sucesso!',
        message: `Transação "${trans.description}" foi removido com sucesso.`,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'bounceInRight'],
        animationOut: ['animated', 'bounceOut'],
        dismiss: {
          duration: 3500,
          onScreen: true,
        },
        slidingEnter: {
          duration: 750,
        },
        slidingExit: {
          duration: 1000,
        },
      });
    }
  };

  const totalTrans = API.getTotalValueByType();
  const totalCurrency = stringUtils.toCurrency(totalTrans.total);
  const totalDebit = stringUtils.toCurrency(totalTrans.debit);
  const totalCredit = stringUtils.toCurrency(totalTrans.credit);
  const len = transactions.length;

  return (
    <Content>
      <Header>Transações</Header>
      {len > 0
        ? (
          <div className={classes.infoBox}>
            <Balance totalCurrency={totalCurrency} />
            <OperationInfo totalCredit={totalCredit} totalDebit={totalDebit} length={len} />
          </div>
        ) : (
          <NoRegister />
        )}
      <TransactionTable
        transactions={transactions}
        updateTransactions={updateMyData}
      />
    </Content>
  );
};

export default Transactions;
