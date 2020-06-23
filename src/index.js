import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import ContactsComponent from './components/ContactsComponent';
import {loadContacts} from './actions/contactActions';

const store = configureStore();
store.dispatch(loadContacts());

ReactDOM.render(
  <Provider store={store}>
    <ContactsComponent/>
  </Provider>, document.getElementById('root'));
