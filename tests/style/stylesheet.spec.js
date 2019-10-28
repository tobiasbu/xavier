import { expect } from 'chai';

import { SheetsRegistry } from 'jss';
import normalize from '@vendor/normalize-jss';

import fs from 'fs';
import path from 'path';
import stringSimilarity from 'string-similarity';

import testUtils from './utils';

/**
  * Ok. This insane, right? Right.
  *
  * Here we test if the normalize JSS is REALLY EQUAL as the original normalize.
  * The normalize CSS version if from the 8.0.1.
  *
  * I could use karma to do similar test but I interested in the precision of JSS parser.
  */
it('JSS stylesheet parser [SSR]', () => {
  // Create JSS instance
  const styles = testUtils.createJSS();

  // this is only for SSR
  const sheetsRegistry = new SheetsRegistry();
  const sheet = styles.createStyleSheet(normalize);
  expect(sheet).to.be.an('object');

  sheetsRegistry.add(sheet);
  const sheetStr = sheetsRegistry.toString({ attached: false });
  // The normalize css has no commentaries and the lines are organized.
  const originalNormalize = fs.readFileSync(path.resolve(__dirname, 'normalize.css'), 'utf8');
  // We use the stringSimilarity to compare the original normalize from the jss-normalize
  // Some properties have order differences.
  const similarity = stringSimilarity.compareTwoStrings(sheetStr, originalNormalize);
  // I guess should be > 0.97 or > 0.98
  expect(similarity).to.be.above(0.98);
});
