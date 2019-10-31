import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import style from './style';
import Logo from './Logo';
import Option from './Option';

import routeMap from '../../../router/routeMap.json';

/**
 * Helper function to create <Option> element.
 * @param {{ link: string, name: string }} route Route descriptor
 * @param {number} index Keyed index for React
 * @param {boolean} selected Is selected?
 */
const mapOption = (route, index, selected) => (
  <Option
    link={route.link}
    key={index}
    selected={selected}
  >
    {route.name}
  </Option>
);

/**
 * Xavier side bar menu.
 *
 * I could totally use pure function here.
 * But here I'm testing the JSS style `attach` and  `detach` functions.
 */
class SideBar extends React.Component {
  componentDidMount() {
    style.attach();
  }

  componentWillUnmount() {
    style.detach();
  }

  render() {
    const { classes } = style;
    const { location } = this.props;

    return (
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarContent}>
          <Logo />
          {routeMap.map((value, index) => {
            const isSelected = location.pathname === value.link;
            return mapOption(value, index, isSelected);
          })}
        </div>
      </div>
    );
  }
}

/**
 * Side bar props
 */
SideBar.defaultProps = {
  location: {
    pathname: '',
  },
};

/**
 * Side bar prop types
 */
SideBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withRouter(SideBar);
