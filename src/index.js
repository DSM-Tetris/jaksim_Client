import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache,IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const client = new ApolloClient({
  uri: "http://3.36.234.120:80/",
  cache: new InMemoryCache({
    fragmentMatcher,
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)