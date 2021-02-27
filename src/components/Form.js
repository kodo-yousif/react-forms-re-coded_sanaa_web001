import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.FName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.LastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;