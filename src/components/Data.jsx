import React from 'react';

export default class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.FName}</h1>
        <h1>{this.props.formData.LName}</h1>
      </div>
    )
  }
}
