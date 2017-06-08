'use strict';
import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';
import App from './containers/App.jsx';

const browserHistory = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
