import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Temp from '../components/temp/Temp';
import Main from '../components/main/Main';
import Login from '../components/auth/login/Login';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/temp" component={Temp}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  );
};

export default Routing;