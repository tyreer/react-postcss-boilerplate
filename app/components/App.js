import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Form from './Form/Form';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
