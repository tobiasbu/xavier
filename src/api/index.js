import * as Utils from '@utils';

let transactions;
let loaded = false;

/**
 * Load transactions from database'
 */
export function loadTransactions() {
  const transStorage = localStorage.getItem('transactions');
  let failed = true;
  if (transStorage) {
    try {
      const parsed = JSON.parse(transStorage);
      if (Array.isArray(parsed)) {
        transactions = parsed;
        failed = false;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Magnetos API: Could not load transactions. Transactions will be re-created. Reason:', e);
    }
  }
  if (failed) {
    transactions = [];
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
  loaded = true;
  return transactions;
}

/**
 * Add a transaction to database
 * @param {string} value Value
 * @param {string} description Description
 * @param {boolean} debit Debit card?
 */
export function addTransaction(value, description, debit) {
  if (!loaded) {
    loadTransactions();
  }
  const t = {
    value: Utils.str.currencyToFloat(value),
    description,
    hash: Math.random(),
    timestamp: Date.now(),
    debit,
  };
  const hash = Utils.generateHash(JSON.stringify(t, null, ' '), '_', true, false);
  t.hash = hash;
  transactions = [...transactions, t];
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

/**
 * Get transaction from database.
 */
export function getTransactions() {
  if (!loaded) {
    return loadTransactions();
  }

  return transactions;
}
