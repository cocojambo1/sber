import React from "react";
import Auth from "../../pages/Auth/Auth";
import Main from "../../pages/Main/Main";
import { Route, Switch } from 'react-router-dom';

const Nav = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Main/>} />

      <Route exact path='/auth/sing-up' render={() => <Auth/>} />

      <Route exact path='/auth/sing-in' render={() => <Auth/>} />
    </Switch>
  );
};

export default Nav;