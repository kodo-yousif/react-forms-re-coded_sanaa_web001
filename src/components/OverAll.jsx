import React from 'react';
import Form from './Form'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          FName={this.state.firstName}
          LName={this.state.lastName}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}