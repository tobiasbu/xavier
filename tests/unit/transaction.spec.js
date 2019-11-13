import { expect } from 'chai';
import { makeRandomTransactions, getRandomInt } from './utils';

import * as API from '@API';

/**
 * Unit test of user transactions.
 * There some very basic operation and functions.
 */
describe('Transaction API', () => {
  beforeEach(() => {
    API.clear();
  });

  it('create transaction', () => {
    const transaction = {
      value: 10,
      description: 'Café em Pó para testers',
    };

    expect(transaction).to.be.an('object');
    expect(transaction.value).to.be.a('number');
    expect(transaction.description).to.be.a('string');
  });

  it('add transaction', () => {
    const trans = API.addTransaction(12.50, 'Chicara exótica', true);
    expect(trans.value).to.equal(12.50);
    expect(trans.description).to.equal('Chicara exótica');
    expect(trans.debit).to.equal(true);
  });

  it('get transaction count', () => {
    makeRandomTransactions(10);
    const trans = API.getTransactions();
    expect(trans.length).to.equal(10);
  });

  it('get total value', () => {
    makeRandomTransactions(10, (index) => (
      {
        value: (index + 1) * 10,
      }
    ));
    const total = API.getTotalValue();
    expect(total).to.equal(550);
  });

  it('get total value by type', () => {
    makeRandomTransactions(10, (index) => {
      const debit = (index % 2 === 0);
      const val = (index + 1) * ((debit) ? 100 : 10);
      return {
        value: val,
        debit,
      };
    });
    const valueByType = API.getTotalValueByType();
    expect(valueByType.total).to.equal(2800);
    expect(valueByType.debit).to.equal(2500);
    expect(valueByType.credit).to.equal(300);
  });

  it('add bulk transaction and then remove some', () => {
    makeRandomTransactions(100);
    expect(API.count()).to.equal(100);
    let trans;
    let count = 100;
    for (let i = 0; i < 37; i += 1) {
      trans = API.getTransactions();
      count = trans.length;
      const idx = getRandomInt(0, count);
      const t = trans[idx];
      API.removeTransaction(t);
    }
    expect(API.count()).to.equal(63);
  });

  it('should clear transactions', () => {
    makeRandomTransactions(100);
    expect(API.count()).to.equal(100);
    API.clear();
    expect(API.count()).to.equal(0);
  });

  it('save-clear-load pipeline', () => {
    makeRandomTransactions(100);
    API.clear(false);
    expect(API.count()).to.equal(0);
    API.loadTransactions();
    expect(API.count()).to.equal(100);
  });

  it('get transaction by type (debit)', () => {
    makeRandomTransactions(100, (index) => (
      {
        debit: index % 2 === 0,
      }
    ));
    const debitArr = API.getByFilter('debit');
    expect(debitArr.length).to.equal(50);
  });
});
