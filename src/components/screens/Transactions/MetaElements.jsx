import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Text from '../../basic/Text';
import useStyle from './style';

/**
 * Total balance
 */
const Balance = (props) => {
  const { totalCurrency } = props;
  const classes = useStyle();
  return (
    <Text size={1} className={classes.fancyBalance}>
      {
        ['Saldo total: ',
          <strong key="totalValue">{totalCurrency}</strong>]
      }
    </Text>
  );
};

/**
 * Balance prop types
 */
Balance.propTypes = {
  totalCurrency: PropTypes.string.isRequired,
};

/**
 * Operation information
 */
const OperationInfo = (props) => {
  const { length, totalCredit, totalDebit } = props;
  const transactionWord = `transaç${(length > 1) ? 'ões' : 'ão'}`;
  return (
    <Text size={3}>
      {
        [
          `Você já realizou o total de ${length} ${transactionWord}.`,
          <br key="really?" />,
          'Valor em operações no Crédito: \n',
          <strong key="totalCredit">{totalCredit}</strong>,
          <br key="really2" />,
          <p style={{ color: 'red' }}>Valor em operações no Débito: </p>, // TODO! Please use astro colors
          <strong key="totalDebit">{totalDebit}</strong>,
        ]
      }
    </Text>
  );
};

/**
 * Operation prop types
 */
OperationInfo.propTypes = {
  length: PropTypes.number.isRequired,
  totalCredit: PropTypes.string.isRequired,
  totalDebit: PropTypes.string.isRequired,
};

/**
 * No register information.
 *
 * The table is empty.
 */
const NoRegister = () => (
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

export {
  OperationInfo,
  Balance,
  NoRegister,
};
