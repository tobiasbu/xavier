import React from 'react';
import PropTypes from 'prop-types';

import useStyle from './style';

/**
 * Page content.
 */
const Content = (props) => {
  const { children } = props;

  const classes = useStyle();

  return (
    <div className={classes.contentContainer}>
      {children}
    </div>
  );
};

/**
 * Content prop types
 */
Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
