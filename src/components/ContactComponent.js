import React from 'react';

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onAddress = this.onAddress.bind(this);
  }

  onAddress() {
    this.props.onAddress(this.props.id);
  }

  render() {
    return (
      <tr onClick={this.onAddress}>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.mobile}</td>
        <td>{this.props.email}</td>
        <td>{this.props.age}</td>
      </tr>
    );
  }
}
