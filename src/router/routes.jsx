import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import useStyle from '../appStyle';

import SideBar from '../components/compound/SideBar';

import CreateTransaction from '../components/screens/CreateTransaction';
import Home from '../components/screens/Home';
import Transactions from '../components/screens/Transactions';



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
        <Route exact path="/transactions">
          <Transactions />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </div>
  );
};

export default routerSwitcher;
