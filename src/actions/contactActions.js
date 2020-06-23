import * as types from './actionTypes';
import ContactApi from '../api/contactApi';

export function loadedContacts(contacts) {
  return { type: types.LOADED_CONTACTS, contacts};
}

export function loadedAddress(contact) {
  return { type: types.LOADED_ADDRESS, contact};
}

export function loadContacts() {
  return dispatch => {
    return ContactApi.getAllContacts().then(contacts => {
      dispatch(loadedContacts(contacts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function fetchAddress(id) {
  return dispatch => {
    return ContactApi.fetchAddress(id).then(contact => {
      // console.log(contact);
      return contact;
      // dispatch(loadedAddress(contact));
    }).catch(error => {
      throw(error);
    });
  };
}