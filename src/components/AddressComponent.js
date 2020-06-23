import React from 'react';
import {connect} from 'react-redux';

class AddressComponent extends React.Component {

  render() {
    const address = this.props.selectedAddress;
    // console.log(address);
    // return null;
    return (<tr>
        {
        address.map((add, index) =>
        (
                  <td key={index}>{add}</td>
        ))
        
    }
    </tr>);
    
  }
}

function mapStateToProps(state, ownProps) {
    // const selectedContact = state.contacts.find(contact => contact.id===ownProps.id);
    const selectedAddress = ownProps.address;
    return {
        // selectedContact,
        selectedAddress
    };
  }

export default connect(mapStateToProps, null)(AddressComponent);