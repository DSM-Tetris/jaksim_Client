import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>, 
  document.getElementById("root")
)