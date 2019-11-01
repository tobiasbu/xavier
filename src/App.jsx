import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { JssProvider } from 'react-jss';
import ReactNotification from 'react-notifications-component';

import useStyle from './appStyle';
import RouterSwitcher from './router/routes';
import { generateId } from '@utils';

// Should convert this files to jss
// import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';


const App = () => {
  const classes = useStyle();
  return (
    <JssProvider generateId={generateId}>
      <ReactNotification isMobile />
      <div className={`a-body ${classes.mainEntry}`} tabIndex={-1} role="group">
        <MemoryRouter initialEntries={['/']}>
          <RouterSwitcher isMobile />
        </MemoryRouter>
      </div>
    </JssProvider>
  );
};


export default App;
