import { expect } from 'chai';

/**
 * Unit test of user transactions.
 * There some very basic operation and functions.
 */
describe('Transactions', () => {
  it('create transaction', () => {
    const transaction = {
      value: 10,
      description: 'Café em Pó para testers',
    };

    expect(transaction).to.be.an('object');
    expect(transaction.value).to.be.a('number');
    expect(transaction.description).to.be.a('string');
  });

  it('create bad transaction', () => {
    const transaction = {
      value: 8,
    };

    expect(transaction).to.be.an('object');
    expect(transaction.value).to.be.a('number');
    expect(transaction.description).to.not.be.a('string');
  });
});
