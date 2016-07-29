import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../actions/actionTypes';
import calculator from '../utils/fuelSavingsCalculator';
import dateHelper from '../utils/dateHelper';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.fuelSavings, action) {
  let newState;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});

    case CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = dateHelper.getFormattedDateTime(new Date());

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = calculator().calculateSavings(newState);
      }

      return newState;

    default:
      return state;
  }
}
