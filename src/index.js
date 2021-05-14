import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache,IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from '@apollo/client';
import { getToken } from './lib/token/GetToken';
import introspectionQueryResultData from './fragmentTypes.json';

const httpLink = createHttpLink({
  uri: "http://10.156.146.199:3000/",
})

const authLink = setContext((_, {headers}) => {
  const token = getToken('token');
  return{ 
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fragmentMatcher,
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)