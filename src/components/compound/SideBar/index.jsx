import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import style from './style';
import Logo from './Logo';
import Option from './Option';
import MobileButton from './MobileButton';

import routeMap from '../../../router/routeMap.json';

/**
 * Helper function to create <Option> element.
 * @param {{ link: string, name: string }} route Route descriptor
 * @param {number} index Keyed index for React
 * @param {boolean} selected Is selected?
 */
const mapOption = (route, index, selected, onSelect) => (
  <Option
    link={route.link}
    key={index}
    selected={selected}
    onSelect={onSelect}
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
  constructor() {
    super();
    // useState can solve that.
    this.state = {
      open: false,
    };
    // Experimental arrow function in classes is disabled, so bound function:
    this.onMobileButton = this.onMobileButton.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    style.attach();
  }

  componentWillUnmount() {
    style.detach();
  }


  onMobileButton(e) {
    e.preventDefault();
    this.triggerMenu();
  }

  onSelect() {
    this.triggerMenu();
  }

  triggerMenu() {
    const { open } = this.state;
    const negate = !open;
    this.setState({ open: negate });
  }

  render() {
    const { open } = this.state;
    const { classes } = style;
    const { location } = this.props;

    const openMainMenu = open ? classes.openMainMenu : '';

    return (
      <>
        <MobileButton onClick={this.onMobileButton} open={open} />
        <div className={classes.sidebarWrapper}>
          <div className={`${classes.sidebarContent} ${open ? classes.openContent : ''}`}>
            <div className={`${classes.sidebarMainMenu} ${openMainMenu}`}>
              <Logo />
              {routeMap.map((value, index) => {
                const isSelected = location.pathname === value.link;
                return mapOption(value, index, isSelected, this.onSelect);
              })}
            </div>
          </div>
        </div>
        <div className={`${classes.backgroundMenu} ${openMainMenu}`} />
      </>
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
