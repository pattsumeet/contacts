import * as types from '../actions/actionTypes';

export default function contactReducer(state=[], action) {
  switch (action.type) {
    case types.LOADED_CONTACTS:
      return action.contacts;

    case types.LOADED_ADDRESS:
      return action.contact;

    default:
      return state;
  }
}
