import React from 'react';
import Form from './Form'

export default class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }



  render() {
    return (
      <div>
        <Form
          FName={this.state.firstName}
          LName={this.state.lastName}
          handleFirstNameChange={event => {
    this.setState({
      firstName: event.target.value
    })
  }}
          handleLastNameChange={event => {
    this.setState({
      lastName: event.target.value
    })
  }}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}