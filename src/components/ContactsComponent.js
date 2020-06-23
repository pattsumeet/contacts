import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as contactActions from '../actions/contactActions';
import ContactComponent from './ContactComponent';
import AddressComponent from './AddressComponent';
import ContactApi from '../api/contactApi';

class ContactsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    toastr.options.timeOut = 1000;
    toastr.options.positionClass = "toast-bottom-right";
    // this.addContact = this.addContact.bind(this);
    this.displayAddress = this.displayAddress.bind(this);
  }

  addContact(contact) {
    this.props.actions.addContact(contact)
      .then(()=> toastr.success('Contact added'))
      .catch(error => {
        alert(error);
      });
  }

  displayAddress(id) {
    // ContactApi.fetchAddress(id).then(contact => {
    //   // console.log(contact);
    //   // return contact;
    //   this.setState({
    //     selectedContactId: contact.id
    //   });
    // }).catch(error => {
    //   throw(error);
    // });

    ContactApi.fetchAddress(id).then(contact => {
      // console.log(contact);
      // return contact;
      this.setState({
        selectedContactId: contact.id,
        selectedContactAddress: contact.address
      });
    }).catch(error => {
      throw(error);
    });
  }

  render() {
    const showAddressComponent = this.state.selectedContactId;
    return (
    <div className="container">
      <br/>
      <div className="row">
        <div className="col-sm-8">
          <div className='panel panel-primary'>
            <div className='panel-heading'>
                <b>Contacts</b>
            </div>
            <div className='panel-body'>
              <table className='table table-striped table-condensed'>
                <thead>
                  <tr>
                    <th>Customer Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts.map(contact =>
                        <ContactComponent onAddress={this.displayAddress} key={contact.id} id={contact.id}
                          name={contact.name} mobile={contact.mobile} email={contact.email} age={contact.age}
                           />
                                        
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className='panel panel-primary'>
            <div className='panel-heading'>
                <b>Address</b>
            </div>
            <div className='panel-body'>
              <table className='table table-striped table-condensed'>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {showAddressComponent && (<AddressComponent id={this.state.selectedContactId} address={this.state.selectedContactAddress}/>)}
                </tbody>
              </table>
            </div>
          </div>
          

        </div>
        <div className="col-sm-4">
          {/* <ContactForm onAddContact={this.addContact} /> */}
        </div>
      </div>
    </div>);
  }
}

ContactsComponent.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsComponent);
