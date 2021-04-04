import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)