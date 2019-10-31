
/**
 * Transaction descriptor
 */
interface Transaction {
  value: number;
  description: string;
  debit: boolean;
  hash: string;
  date: string;
}

/**
 * Magnetos API
 */
declare namespace API {
  /**
   * Load transactions from database.
   */
  declare function loadTransactions(): Transaction[];

  /**
   * Add a transaction to database
   * @param {string} value Value
   * @param {string} description Description
   * @param {boolean} debit Debit card?
   */
  declare function addTransaction(value: string, description: string, debit: boolean): Transaction;

  /**
   * Get transaction from database.
   */
  declare function getTransactions(): Transaction[];
}

export = API;