import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from '@apollo/client';
import { getToken } from './lib/token/GetToken';

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)