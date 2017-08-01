import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Padawan from './Padawan';
import Administrator from './Administrator';
import NotFound from './NotFound';

const App = () => (
  <Switch>
    <Route exact path = "/" component = { Padawan } />
    <Route path = "/administrator" component = { Administrator } />
    <Route path = "*" component = { NotFound } />
  </Switch>
	);

const Routes = () => (
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

export default Routes;