import jss from 'jss';
import preset from 'jss-preset-default';

import normalize from '@vendor/normalize-jss';
import astro from '@vendor/astro-jss';

import generateId from '../components/generateId';

const presetJss = preset();
const jssOptions = {
  createGenerateId: () => generateId,
  id: { minify: true },
  ...presetJss,
};

jss.setup(jssOptions);

const globals = {
  '@global': {
    ':root': {
      '--color': '#ffaadd',
      '--text': '3rem',
    },
    '#root': {
      height: '100%',
      minHeight: '100%',
    },
    body: {
      backgroundColor: '#fdfdfd',
      fontSize: '16px',
      lineHeight: 1.5,
    },
    a: {
      textDecoration: 'underline',
    },
    myTest: {
      color: 'red',
    },
    main: {
      maxWidth: '48rem',
      margin: '0 auto',
    },
  },
};

jss.createStyleSheet(normalize).attach();
jss.createStyleSheet(astro).attach();
jss.createStyleSheet(globals).attach();
