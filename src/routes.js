import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './components/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import EmployeePage from './components/employee/EmployeePage'; // eslint-disable-line import/no-named-as-default
import ProductPage from './components/product/ProductPage'; // eslint-disable-line import/no-named-as-default
import BillingPage from './components/billing/BillingPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="billing" component={BillingPage}/>
    <Route path="products" component={ProductPage}/>
    <Route path="employees" component={EmployeePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
