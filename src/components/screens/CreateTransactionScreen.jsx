import React from 'react';

import Button from '../basic/Button';
import Input from '../basic/Input';
import CurrencyInput from '../basic/CurrencyInput';
import Toggle from '../basic/Toggle';
import Title from '../basic/Title';

export default class CreateTransactionScreen extends React.Component {

  render() {
    return (
          <main>
            <form>
              <Title size={4}>Cadastre uma nova transação</Title>
              
              <p>Preencha os campos a seguir:</p>
              
              <Input label="Descrição" placeholder="Ex: Compras do Atacado, Manunteção da Cozinha, Fatura do Cartão..." />
              <CurrencyInput label="Valor" />
              <Button color="neptune">Cadastrar</Button>
              <Toggle />
            </form>
          </main>
    )
  }

}