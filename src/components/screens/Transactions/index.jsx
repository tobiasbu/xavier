import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../container/Content';
import Header from '../../container/Header';

import TransactionTable from '../../compound/TransactionTable';

const noRegister = () => (
  <>
    <p key="p1">
      {
        React.Children.toArray(['Você ainda não cadastrou ',
          <strong>
            nenhuma transação
          </strong>,
          '.'])
      }
    </p>
    <p key="p2">
      {
        React.Children.toArray([
          'Clique na opção ',
          <Link to="/create-transaction" aria-label="Ir para página Nova Transação">Nova Transação</Link>,
          ' e comece a registrar!',
        ])
      }
    </p>
  </>
);


const Transactions = () => (
  <Content>
    <Header>Transações</Header>
    <TransactionTable noRegisterRender={noRegister} />
  </Content>
);

export default Transactions;
