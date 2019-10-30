/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Button from '../../basic/Button';
import Input from '../../basic/Input';
import CurrencyInput from '../../basic/CurrencyInput';
import Toggle from '../../basic/Toggle';
import Header from '../../container/Header';
import Content from '../../container/Content';

export default class CreateTransaction extends React.Component {

  render() {
    return (
      <Content>
        <Header>Cadastre uma nova transação</Header>
        <main>
          <form>
            <p>Preencha os campos a seguir:</p>

            <Input label="Descrição" placeholder="Ex: Compras do Atacado, Manunteção da Cozinha, Fatura do Cartão..." />
            <CurrencyInput label="Valor" />
            <Button color="neptune">Cadastrar</Button>
            <Toggle />
          </form>
        </main>
      </Content>
    );
  }
}
