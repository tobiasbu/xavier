let transactions;
let loaded = false;

export function loadTransactions() {
  const transStorage = localStorage.getItem('transactions');
  if (Array.isArray(transStorage)) {
    transactions = transStorage;
  } else {
    transactions = [];
    localStorage.setItem('transactions', []);
  }
  loaded = true;
  return transactions;
}

export function createTransaction(value, description) {
  const hash = 0;
  return {
    value,
    description,
    hash,
    date: new Date(Date.now()).toUTCString(),
  };
}

export function getTransactions() {
  if (!loaded) {
    return loadTransactions();
  }

  return transactions;
}
