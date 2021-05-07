import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routers/Routing';
import { ApolloClient, InMemoryCache, HttpLink, from } from 'apollo-boost';
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/client';

const link = from([
  new HttpLink({ uri : "http://3.36.234.120:80" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyle />
        <Routing />
        {/* <GraphQL /> */}
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default hot(module)(App);