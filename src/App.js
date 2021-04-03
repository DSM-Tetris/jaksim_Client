import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routers/Routing';
// import GraphQL from './components/GraphQL';
import GlobalStyle from './globalStyle';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      {/* <GraphQL /> */}
    </BrowserRouter>
  );
};

export default hot(module)(App);