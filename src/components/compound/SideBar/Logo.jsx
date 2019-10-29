import React from 'react';
import { createUseStyles } from 'react-jss';

import magnetosLogo from './magnetos-logo.svg';
import generateId from '../../generateId';

const useStyle = createUseStyles({
  magnetos: {
    maxWidth: '100%',
    height: 148,
    margin: 'auto',
    textIndent: '-999px',
    backgroundSize: 'contain',
    backgroundImage: `url(${magnetosLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  magnetosWrapper: {
    margin: '2.8rem',
  },
}, {
  generateId,
});

/**
 * Magnetos logo.
 */
const Logo = () => {
  const classes = useStyle();
  return (
    <div className={classes.magnetosWrapper}>
      <a href="/">
        <h1 className={classes.magnetos} alt="Magnetos Logo">Magnetos</h1>
      </a>
    </div>
  );
};

export default Logo;
