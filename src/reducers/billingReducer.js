import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function billingReducer(state = initialState.billing, action) {
  switch (action.type) {
    case types.LOAD_BILL_SUCCESS:
      return action.bills;

    case types.CREATE_BILL_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.bill)
      ];

    default:
      return state;
  }
}
