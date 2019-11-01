import React from 'react';
import PropTypes from 'prop-types';

import useStyle from './style';

const MobileButton = (props) => {
  const { onClick, open } = props;
  const classes = useStyle();
  const openClass = (open) ? classes.mobileClose : '';
  const icon = (open) ? 'close' : 'menu';
  return (
    <button
      className={`a-btn a-btn--mars a-btn--medium a-btn--icon ${classes.mobileButton} ${openClass}`}
      type="button"
      onClick={onClick}
    >
      <i className={`a-icon a-icon--${icon} a-icon--size-medium ${classes.mobileIcon}`} aria-label="Acessar menu principal" />
    </button>
  );
};

MobileButton.defaultProps = {
  open: false,
};

MobileButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default MobileButton;
