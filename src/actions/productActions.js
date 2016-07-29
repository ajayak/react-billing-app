import * as types from './actionTypes';
import productApi from '../api/mockProductApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadProductsSuccess(courses) {
  return { type: types.LOAD_PRODUCT_SUCCESS, courses};
}

export function loadProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
