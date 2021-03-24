import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Temp from '../components/temp/Temp';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route path="/temp" component={Temp}/>
      </Switch>
    </div>
  );
};

export default Routing;