import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <p>Welcome to the home page</p>
        <p> Please select where you want go</p>
      </div>
    );
  }
}
