import React from 'react';

import useStyle from './style';

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
