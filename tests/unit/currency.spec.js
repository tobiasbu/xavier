import { expect } from 'chai';

import * as stringUtils from '@utils/stringUtils';

describe('Currency conversion', () => {
  it('float to Real (R$)', () => {
    const a = 120.15;
    const b = 300.48;
    const c = 0.02;

    expect(stringUtils.toCurrency(a, true)).to.equal('R$ 120,15');
    expect(stringUtils.toCurrency(b, true)).to.equal('R$ 300,48');
    expect(stringUtils.toCurrency(c, true)).to.equal('R$ 0,02');
  });

  it('Real (R$) to float', () => {
    const a = 'R$ 1.000,45';
    const b = 'R$ 745,10';
    const c = 'R$ 5,00';
    const d = 'R$ 16.220';
    const e = 'R$ 10000,';

    expect(stringUtils.currencyToFloat(a, true)).to.equal(1000.45);
    expect(stringUtils.currencyToFloat(b, true)).to.equal(745.1);
    expect(stringUtils.currencyToFloat(c, true)).to.equal(5);
    expect(stringUtils.currencyToFloat(d, true)).to.equal(16220);
    expect(stringUtils.currencyToFloat(e, true)).to.equal(10000);
  });
});
