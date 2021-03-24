import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Temp from '../components/temp/Temp';
import Main from '../components/main/Main';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/temp" component={Temp}/>
      </Switch>
    </div>
  );
};

export default Routing;