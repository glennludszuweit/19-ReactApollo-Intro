import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import AddPost from '../components/AddPost';
import Login from '../components/Login';

function Main() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/addPost' component={AddPost} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default Main;
