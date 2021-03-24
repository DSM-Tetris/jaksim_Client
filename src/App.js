import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {

  const click = () => {
    console.log("hello");
  }
  return (
    <div>
      <h1>React + Apollo Client</h1>
      <button onClick={click}>wefewf</button>
    </div>
  );
};

export default hot(module)(App);