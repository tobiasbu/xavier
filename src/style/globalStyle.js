import jss from 'jss';
import preset from 'jss-preset-default';
import normalize from '@vendor/normalize-jss';

jss.setup(preset());

const globals = {
  '@global': {
    body: {
      backgroundColor: 'green',
    },
    a: {
      textDecoration: 'underline',
    },
  },
};

jss.createStyleSheet(normalize).attach();
jss.createStyleSheet(globals).attach();
