import React from "react";
import Auth from "../../pages/Auth/Auth";
import Main from "../../pages/Main/Main";
import { Route, Switch } from 'react-router-dom';
import AddTask from "../../pages/AddTask/AddTask";
import SingleTask from "../../pages/SingleTask/SingleTask";

const Nav = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Main/>} />

      <Route exact path='/auth/sing-up' render={() => <Auth/>} />

      <Route exact path='/auth/sing-in' render={() => <Auth/>} />

      <Route exact path='/addTask' render={() => <AddTask/>} />

      <Route exact path='/task/:id' render={() => <SingleTask/>} />
    </Switch>
  );
};

export default Nav;