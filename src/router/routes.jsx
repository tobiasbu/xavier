import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import useStyle from '../appStyle';

import SideBar from '../components/compound/SideBar';
import CreateTransaction from '../components/screens/CreateTransaction';
import Home from '../components/screens/Home';


const routerSwitcher = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainWrapper}>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-transaction">
          <CreateTransaction />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </div>
  );
};

export default routerSwitcher;
