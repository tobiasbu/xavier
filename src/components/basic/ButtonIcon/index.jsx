import React from 'react';
import PropTypes from 'prop-types';

/**
 * Astro Button icon
 * @param {import('./types').ButtonIconProps} props Button icon props
 */
const ButtonIcon = (props) => {
  const { icon, onClick, title } = props;

  return (
    <button
      className="a-btn a-btn--ghost-mars a-btn--medium a-btn--icon"
      type="button"
      title={title}
      onClick={onClick}
    >
      <i className={`a-icon a-icon--${icon} a-icon--size-medium`} aria-label={title} />
    </button>
  );
};

/**
 * Button Icon prop types
 */
ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

/**
 * Button icon default props
 */
ButtonIcon.defaultProps = {
  onClick: null,
};

export default ButtonIcon;
