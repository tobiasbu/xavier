import * as Utils from '@utils';

/**
 * @typedef { import("./index").Transaction } Transaction
 */

/**
* @type {Transaction[]}
*/
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
      console.warn('Xavier API: Could not load transactions. Transactions will be re-created. Reason:', e);
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
 * Save transactions to database;
 * @param {Transaction[]} transList Transaction list.
 */
export function saveTransactions(transList = undefined) {
  let list = transList;
  if (!list) {
    if (!loaded) {
      loadTransactions();
    }
    list = transactions;
  }
  localStorage.setItem('transactions', JSON.stringify(list));
}

/**
 * Add a transaction to database
 * @param {string | number} value Value
 * @param {string} description Description
 * @param {boolean} debit Debit card?
 */
export function addTransaction(value, description, debit) {
  if (!loaded) {
    loadTransactions();
  }

  let val;
  if (typeof value === 'string') {
    val = Utils.str.currencyToFloat(value);
  } else {
    // Ts checks is a bit annoying...
    val = value;
  }

  /**
   * @type {Transaction}
   */
  const t = {
    value: val,
    description,
    hash: Math.random(),
    timestamp: Date.now(),
    debit,
  };
  const hash = Utils.generateHash(JSON.stringify(t, null, ' '), '_', true, false);
  t.hash = hash;
  transactions = [...transactions, t];
  localStorage.setItem('transactions', JSON.stringify(transactions));
  return t;
}

/**
 * Remove a transaction.
 * @param {Transaction} trans Transaction to remove
 * @return {boolean} True if was successfully removed, otherwise false.
 */
export function removeTransaction(trans) {
  if (!loaded) {
    loadTransactions();
  }
  let index = -1;
  // filter, some, can be alternatives
  // like: // transactions = transactions.filter((t) => t.hash !== trans.hash);
  for (let i = 0; i < transactions.length; i += 1) {
    if (trans.hash === transactions[i].hash) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    transactions.splice(index, 1);
    transactions = [...transactions];
    saveTransactions(transactions);
    return true;
  }
  return false;
}

/**
 * Get total value of the transactions.
 */
export function getTotalValue() {
  if (!loaded) {
    loadTransactions();
  }
  if (transactions.length <= 0) {
    return 0;
  }
  return transactions.reduce((prev, current) => prev + current.value, 0);
}

/**
 * Return the total value filtered by of `debit`, `credit` and `total`.
 */
export function getTotalValueByType() {
  if (!loaded) {
    loadTransactions();
  }
  if (transactions.length <= 0) {
    return 0;
  }
  let credit = 0;
  let debit = 0;
  for (let i = 0; i < transactions.length; i += 1) {
    if (transactions[i].debit) {
      debit += transactions[i].value;
    } else {
      credit += transactions[i].value;
    }
  }
  return {
    credit,
    debit,
    total: credit + debit,
  };
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

/**
 * Clear transactions list.
 * @param {boolean} overwrite Overwrite database?
 */
export function clear(overwrite = true) {
  loaded = false;
  transactions = [];
  if (overwrite) {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
}

/**
 * Get total of transactions.
 */
export function count() {
  if (!loaded) {
    return 0;
  }
  return transactions.length;
}
