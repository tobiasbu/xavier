import randomWords from 'random-words';
import * as API from '@API';

export const randWord = () => randomWords({ exactly: 1, wordsPerString: 2 })[0];

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function makeRandomTransactions(size, fn) {
  for (let i = 0; i < size; i += 1) {
    let obj;
    if (fn) {
      obj = fn(i);
    }
    const val = (obj && obj.value) ? obj.value : getRandomInt(10, 1000);
    const debit = (obj && obj.debit !== undefined) ? obj.debit : true;
    API.addTransaction(val, randWord(), debit);
  }
}

export function makeRandomArrayOfInt(size, range) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr.push(getRandomInt(0, range));
  }
  return arr;
}
