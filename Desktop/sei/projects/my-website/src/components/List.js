import React, { Component } from "react";
import Item from "./Item";
export default class List extends Component {
  try = () => {
    console.log("wpppp");
  };
  render() {
    console.log("PROPS:", this.props.tasks);
    // let newTasks = this.props.tasks.map(item => {
    //   return <li> {item} </li>;
    // });

    let newTasks_2 = this.props.tasks.map((element, index) => {
      return (
        <button onClick={() => this.try()}>
          <Item taskTitle={element.title} />{" "}
        </button>
      );
    });
    return (
      <div>
        <h3>List</h3>
        {newTasks_2}
        {/* <ol> */}
        {/* <li>{this.props.tasks[0]}</li>
          <li>{this.props.tasks[1]}</li>
          <li>{this.props.tasks[2]}</li> */}
        {/* {newTasks } */}
        {/* </ol> */}
      </div>
    );
  }
}
