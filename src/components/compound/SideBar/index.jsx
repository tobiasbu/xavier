import React from 'react';
import style from './style';
import Logo from './Logo';
import Option from './Option';

export default class SideBar extends React.Component {

  componentDidMount() {
    style.attach();
  }

  componentWillUnmount() {
    style.detach();
  }

  onSelect(e) {
    
  }

  render() {
    const { onSelect } = this;
    const { classes } = style;

    return (
      <div className={classes.sidebarWrapper}>
        <div className={classes.sidebarContent}>
          <Logo />
          <Option onSelect={onSelect}>Inicio</Option>
          <Option onSelect={onSelect}>Nova transação</Option>
          <Option onSelect={onSelect}>Transações</Option>
        </div>
      </div>
    );
  }
}
