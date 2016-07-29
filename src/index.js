/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
import { syncHistoryWithStore } from 'react-router-redux';
import {loadProducts} from './actions/productActions';
import {loadEmployees} from './actions/employeeActions';

const store = configureStore();
store.dispatch(loadProducts());
store.dispatch(loadEmployees());

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
