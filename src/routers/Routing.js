import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Temp from '../components/temp/Temp';
import Main from '../components/main/Main';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/temp" component={Temp}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/register" component={RegisterContainer}/>
      </Switch>
    </div>
  );
};

export default Routing;