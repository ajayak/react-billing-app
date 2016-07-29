import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function employeeReducer(state = initialState.employees, action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_SUCCESS:
      return action.employees;

    default:
      return state;
  }
}
