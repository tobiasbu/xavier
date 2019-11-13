import React from 'react';

import * as stringUtils from '@utils/stringUtils';
import * as API from '@API';

import Content from '../../container/Content';
import Header from '../../container/Header';
import Title from '../../basic/Title';
import Text from '../../basic/Text';

import useStyle from './style';

/**
 * Xavier home page.
 */
const Home = () => {
  const len = API.getTransactions().length;
  const { total } = API.getTotalValueByType();
  const classes = useStyle();

  return (
    <Content>
      <Header>Seja bem vindo!</Header>
      {(len > 0)
        ? (
          <>
            <Title size={4} className={classes.mainBox}>{`Seu saldo atual é de ${stringUtils.toCurrency(total)}.`}</Title>
            <Text size={1}>
              Você está indo bem!
            </Text>
            <Text size={1}>
              Continue registrando suas transações, que depois é só
              <span role="img" aria-label="sparkles">✨</span>
               sucesso!
              <span role="img" aria-label="sparkles">✨</span>
            </Text>
          </>
        ) : (
          <>
            <Text size={1}>
              <span role="img" aria-label="high voltage">⚡</span>
              <strong> xavier </strong>
              é muito mais do que um programa de gestão financeira.
            </Text>
            <Text size={1}>
              <span role="img" aria-label="high voltage">⚡</span>
              <strong> xavier </strong>
              fornece um espaço para seus usuários com soluções ágeis e fáceis,
              para qualquer tipo de necessidade.
            </Text>
            <Text size={1}>
              Comece agora já a usar a melhor plataforma de gestão financeira, gratuitamente!
            </Text>
          </>
        )}
    </Content>
  );
};

export default Home;
