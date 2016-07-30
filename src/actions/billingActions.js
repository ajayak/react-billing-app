import * as types from './actionTypes';
import billingApi from '../api/mockBillingApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadBillsSuccess(bills) {
  return {type: types.LOAD_BILL_SUCCESS, bills};
}

export function createBillSuccess(bill) {
  return {type: types.CREATE_BILL_SUCCESS, bill};
}

export function loadBills() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return billingApi.getAllBills().then(bills => {
      dispatch(loadBillsSuccess(bills));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBill(bill) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return billingApi.saveBill(bill).then(bill => {
      dispatch(createBillSuccess(bill));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
