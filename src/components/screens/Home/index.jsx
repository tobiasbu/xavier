import React from 'react';
import Content from '../../container/Content';
import Header from '../../container/Header';
import Title from '../../basic/Title';

/**
 * Magnetos home page.
 */
const Home = () => {
  const total = 0;
  return (
    <Content>
      <Header>Seja bem vindo!</Header>
      <Title size={4}>{`Você tem o total de ${total}`}</Title>
    </Content>
  );
};

export default Home;
