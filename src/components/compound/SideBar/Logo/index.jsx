import React from 'react';

import useStyle from './style';

/**
 * Xavier logo.
 */
const Logo = () => {
  const classes = useStyle();
  return (
    <div className={classes.xavierWrapper}>
      <a href="/">
        <h1 className={classes.xavier} alt="Xavier Logo">Xavier</h1>
      </a>
    </div>
  );
};

export default Logo;
