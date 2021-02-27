import React from 'react';
import Form from './Form'

export default class OverAll extends React.Component {
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
        <Data FName={this.state.firstName}
          LName={this.state.lastName} />
      </div>
    )
  }
}