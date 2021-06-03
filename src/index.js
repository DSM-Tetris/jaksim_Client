import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import possibleTypes from './fragmentTypes.json';
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://3.36.234.120:80/",
    includeExtensions: true,
  }),
  cache: new InMemoryCache({
    possibleTypes,
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)