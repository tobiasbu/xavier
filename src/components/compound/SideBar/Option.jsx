import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  optionWrapper: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 20,
    fontWeight: 500,
    color: '#32383c',
    padding: '2rem 2.5rem',
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease 0s',
    cursor: 'pointer',
    '&:hover, .selected': {
      backgroundColor: 'var(--color-moon-200)',
    },
  },
});

/**
 * Side bar option
 * @param {import('./types').OptionsProps} props Option props
 */
const Option = (props) => {
  const {
    children, onSelect, selected, tabIndex,
  } = props;

  const classes = useStyle();
  const selectedClass = (selected) ? ' selected' : '';

  return (
    <div
      className={`${classes.optionWrapper}${selectedClass}`}
      onClick={onSelect}
      onKeyDown={onSelect}
      role="button"
      tabIndex={tabIndex}
      aria-label={`${children}`}
    >
      {children}
    </div>
  );
};

Option.defaultProps = {
  onSelect: null,
  selected: false,
  tabIndex: 0,
};

Option.propTypes = {
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  tabIndex: PropTypes.number,
};


export default Option;
