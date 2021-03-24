import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routers/Routing';

const App = () => {

  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Routing />
    </BrowserRouter>
  );
};

export default hot(module)(App);