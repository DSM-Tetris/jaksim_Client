import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Temp from '../components/temp/Temp';
import Main from '../components/main/Main';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import WriteDetailView from '../components/write/postDetailView/PostDetailView';
import WriteContainer from '../containers/PostContainer';
import WriteDetail from '../components/write/writeDetail/WriteDetail';
import PostWrite from '../components/write/posts/PostWrite';
import CategorySetting from '../components/write/category/CategorySetting';
import NotFound from '../components/notFound/NotFound';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/temp" component={Temp}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/register" component={RegisterContainer}/>
        <Route path="/category" component={CategorySetting} />
        <Route exact path='/post' component={WriteContainer} />
        <Route path="/post/:id" component={WriteDetailView} />
        <Route path="/write" component={PostWrite} />
        <Route path="/hello" component={WriteDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routing;