import React from 'react';

export default class Data extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.FName}</h1>
        <h1>{this.props.LName}</h1>
      </div>
    )
  }
}
