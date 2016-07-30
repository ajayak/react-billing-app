import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import employees from './employeeReducer';
import products from './productReducer';
import billing from './billingReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  employees,
  products,
  fuelSavings,
  billing,
  ajaxCallsInProgress,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
