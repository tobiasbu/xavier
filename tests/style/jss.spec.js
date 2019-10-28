import { expect } from 'chai';

import { create } from 'jss';
import jssPreset from 'jss-preset-default';

import testUtils from './utils';

/**
 * This test cases was made to test basic JSS lib functions.
 * Members of this project never used before and for this reason
 * we created test to learn to use the lib.
 */
describe('JSS usability', () => {
  it('should create JSS instance', () => {
    // Creation
    const styles = create(jssPreset());
    expect(styles).to.be.an('object');

    // Setup
    styles.setup({
      Renderer: null,
    });
    expect(styles.options.Renderer).to.be.equal(null);
  });

  it('should create JSS stylesheet', () => {
    const styles = testUtils.createJSS();

    const css = {
      dummyClass: {
        color: 'black',
      },
    };

    // Stylesheet creation
    const sheet = styles.createStyleSheet(css);
    expect(sheet).to.be.an('object');
    expect(sheet.classes).to.be.an('object');
  });

  it('should we really trust JSS stylesheet creation', () => {
    const styles = testUtils.createJSS();

    const css = {
      redText: {
        color: 'red',
        textWeight: 600,
        lineHeight: 1.5,
      },
    };

    // Stylesheet creation
    const sheet = styles.createStyleSheet(css);
    expect(sheet).to.be.an('object');
    expect(sheet.classes).to.be.an('object');

    // classes are strings!
    expect(sheet.classes.redText).to.be.a('string');

    // See https://github.com/cssinjs/jss/blob/master/packages/jss/src/RuleList.js
    const rulesList = sheet.rules;
    const cssRef = rulesList.get('redText');
    expect(cssRef).to.be.an('object');
    expect(cssRef.id).to.equals(sheet.classes.redText);

    // Check the parsed style
    const parsedCssStyle = cssRef.style;
    expect(parsedCssStyle).to.be.an('object');
    expect(parsedCssStyle).to.deep.equal({
      color: 'red',
      'text-weight': '600',
      'line-height': '1.5',
    });
  });
});
