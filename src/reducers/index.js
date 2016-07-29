import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import employees from './employeeReducer';
import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  employees,
  products,
  fuelSavings,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
