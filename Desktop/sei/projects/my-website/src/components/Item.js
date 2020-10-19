import React, { Component } from "react";
import "./../App.css";
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giveItToSomeoneElse: false
    };
  }
  tafweed = () => {
    if (this.state.giveItToSomeoneElse === true) {
      return "Yes :)";
    } else {
      return "No :(";
    }
  };
  toggleState = () => {
    this.setState({ giveItToSomeoneElse: !this.state.giveItToSomeoneElse });
  };
  render() {
    // console.log(this.props);
    // console.log('Func:', this.tafweed());
    return (
      <div className="border">
        {/* <p>item</p> */}
        <button onClick={() => this.toggleState()}>Toggle</button>
        <p>{this.props.taskTitle}</p>
        <p>GIVE IT TO SOMEONE ELSE: {this.tafweed()}</p>
      </div>
    );
  }
}
