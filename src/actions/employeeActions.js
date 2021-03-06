import employeeApi from '../api/mockEmployeeApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadEmployeesSuccess(employees) {
  return {type: types.LOAD_EMPLOYEE_SUCCESS, employees};
}

export function loadEmployees() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return employeeApi.getAllEmpoyees().then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}
