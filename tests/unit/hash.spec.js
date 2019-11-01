import { expect } from 'chai';
import hashFunc from 'murmurhash-js';

import { capitalize } from '@utils/stringUtils';

function hashGen(key, toHex = true, seed) {
  let mur = hashFunc(`${key}${JSON.stringify(key)}`, seed);
  if (toHex) {
    mur = mur.toString(16);
  }
  return mur;
}

function generateClassName(rule, seed) {
  return `_x_${capitalize(rule.key.substr(0, 4))}__${hashGen(rule.key, true, seed)}`;
}

describe('Hash generation', () => {
  it('generate class name', () => {
    const rule = {
      key: 'sideBarWrapper',
    };
    const hash = generateClassName(rule, 1234);
    expect(hash).to.be.a('string');

    const len = hash.length;

    expect(hash.substr(0, 3)).to.equal('_x_');
    expect(hash.substr(3, 4)).to.equal('Side');

    const mur = hashFunc(`${rule.key}${JSON.stringify(rule.key)}`, 1234).toString(16);
    expect(hash.substr(9, len - 9)).to.equal(mur);
  });
});
