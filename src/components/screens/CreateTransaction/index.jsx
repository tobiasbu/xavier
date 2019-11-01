/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { addTransaction } from '@API';

import Button from '../../basic/Button';
import Input from '../../basic/Input';
import CurrencyInput from '../../basic/CurrencyInput';
import Toggle from '../../basic/Toggle';
import Header from '../../container/Header';
import Content from '../../container/Content';

import useStyle from './style';
import * as validation from './validation';

/**
 * Create transaction screen.
 *
 * Form based on the react-form hook.
 * @see https://blog.logrocket.com/react-hook-form-vs-formik-a-technical-and-performance-comparison/
 */
const CreateTransaction = () => {
  const {
    register, handleSubmit, errors, formState,
  } = useForm();
  const classes = useStyle();
  const [isDebit, setDebit] = useState(false);

  // On form submit
  const onSubmit = (data, e) => {
    e.preventDefault();
    addTransaction(data.valor, data.descricao, data['credito-debito']);
    e.target.reset();
  };

  const descError = validation.checkError(errors.descricao, 'Por favor, insira uma descrição para sua transação.');
  const currencyError = validation.checkError(errors.valor, 'Por favor, insira uma valor válido.');
  const buttonColor = (isDebit) ? 'neptune' : 'mars';

  return (
    <Content>
      <Header>Cadastre uma nova transação</Header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Preencha os campos a seguir:</p>
          <Input
            label="Descrição"
            placeholder="Ex: Compras do Atacado, Manunteção da Cozinha, Fatura do Banco..."
            forwardedRef={
              register({
                required: true,
                validate: validation.validateDescription,
                min: 2,
              })
            }
            validation={descError.valid}
            errorMessage={descError.message}
          />
          <CurrencyInput
            label="Valor"
            forwardedRef={
              register({
                required: true,
                validate: validation.validateCurrency,
              })
            }
            validation={currencyError.valid}
            errorMessage={currencyError.message}
          />
          <Toggle
            label="Crédito"
            secondaryLabel="Débito"
            className="field-full"
            forwardedRef={register}
            onChange={(checked) => { setDebit(checked); }}
            title="Crédito ou Débito?"
          />
          <Button
            color={buttonColor}
            className={classes.registerButton}
            type="submit"
            disabled={formState.isSubmitting}
            title="Cadastrar nova transação"
          >
            Cadastrar
          </Button>
        </form>
      </main>
    </Content>
  );
};

export default CreateTransaction;
