import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Generate from '../pages/generate';
import Saved from '../pages/saved';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Generate}></Route>
      <Route exact path='/saved' component={Saved}></Route>
    </Switch>
  );
}

export default Main;