import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache,IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createHttpLink } from '@apollo/client';
import { ApolloLink,  concat} from 'apollo-link';
import {HttpLink } from '@apollo/client'
import introspectionQueryResultData from './fragmentTypes.json';

const token = localStorage.getItem("token");

const httpLink = new HttpLink({
  uri: "http://10.156.146.199:3000/",
  headers: token
    ? {
        Authorization: `Bearer ${token}`
      }
    : {}
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const client = new ApolloClient({
  httpLink,
  cache: new InMemoryCache({
    fragmentMatcher,
  }),
  credentials: "include",
  headers:{
    "authorization": token? `Bearer ${token}` : "",
    "ltqkf": "tklqkfje",
    "rotoRLdi":123124, 
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)