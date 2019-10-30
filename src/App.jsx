import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import { JssProvider } from 'react-jss';

import useStyle from './appStyle';
import RouterSwitcher from './router/routes';

// const initialEntries = ['/select-customer'];

// import SideBar from './components/compound/SideBar';

//  {/* <JssProvider jss={jss} id={{ minify: true }}> */}
//  <div className={`${classes.mainWrapper}`}>
//  <SideBar />
//  <CreateTransactionScreen />
//  </div>
// {/* </JssProvider> */}

const App = () => {
  const classes = useStyle();
  return (
    <div className={`a-body ${classes.mainEntry}`} tabIndex={-1} role="group">
      <MemoryRouter initialEntries={['/']}>
        <RouterSwitcher />
      </MemoryRouter>
    </div>
  );
};


export default App;
