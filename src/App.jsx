import React from 'react';
import { JssProvider } from 'react-jss';
import useStyle from './AppStyle';
import jss from './style/globalStyle';

import CreateTransactionScreen from './components/screens/CreateTransactionScreen';
import SideBar from './components/compound/SideBar';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();
  return (
    <div className={`a-body ${classes.mainEntry}`} tabIndex={-1} role="group">
      {/* <JssProvider jss={jss} id={{ minify: true }}> */}
        <div className={`${classes.mainWrapper}`}>
        <SideBar />
        <CreateTransactionScreen />
        </div>
      {/* </JssProvider> */}
    </div>
  );
};


export default App;
