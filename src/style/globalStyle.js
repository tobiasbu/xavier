import jss from 'jss';
import preset from 'jss-preset-default';

import normalize from '@vendor/normalize-jss';
import astro from '@vendor/astro-jss';
import { generateId } from '@utils/generateHash';

const presetJss = preset();
const jssOptions = {
  createGenerateId: () => generateId,
  id: { minify: true },
  ...presetJss,
};

jss.setup(jssOptions);

const globals = {
  '@global': {
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
      textDecoration: 'none',
      color: 'var(--color-neptune-600)',
    },
    p: {
      fontFamily: 'Lato, sans-serif',
      fontSize: 'var(--font-size-2base)',
      fontWeight: 400,
      margin: '0.8rem 0 1rem',
    },
    '.field-full': {
      width: '100%',
      display: 'block',
      margin: '1.5rem 0',
    },
  },
};

jss.createStyleSheet(normalize).attach();
jss.createStyleSheet(astro).attach();
jss.createStyleSheet(globals).attach();
