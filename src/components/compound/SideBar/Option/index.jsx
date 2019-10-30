import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import useStyle from './style';

/**
 * Side bar option
 * @param {import('../types').OptionsProps} props Option props
 */
const Option = (props) => {
  const {
    children, selected, link,
  } = props;

  const classes = useStyle();
  const selectedClass = (selected) ? classes.optionSelected : '';

  return (
    <Link to={link} className={`${classes.optionWrapper} ${selectedClass}`} aria-label={`${children}`}>
      {children}
    </Link>
  );
};

/**
 * Option default props.
 */
Option.defaultProps = {
  link: '/',
  selected: false,
};

/**
 * Option prop types
 */
Option.propTypes = {
  link: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.string.isRequired,
};


export default Option;
