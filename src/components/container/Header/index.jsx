import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../basic/Title';

import useStyle from './style';

/**
 * Page header
 * @param {HeaderProps} props Header props.
 */
const Header = (props) => {
  const { children } = props;
  const classes = useStyle();

  return (
    <header className={classes.headerContainer}>
      <div className={classes.headerInner}>
        <Title size={3}>{children}</Title>
      </div>
    </header>
  );
};

/**
 * Header prop types
 * @type {HeaderProps}
 */
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Header;
