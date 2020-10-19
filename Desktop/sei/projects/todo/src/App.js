import React from 'react';
import ListContainer from './ListContainer';
export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      toDoItems: [
        'Build a todo App',
        'Go home and Plan to take over the world!',
        'Make a list of Stuff to do ',
        'have some ice cream! :)',
      ],
      newItem :'',
    }
  }
  addItem = (e) => {
e.preventDefault();
    console.log("additem!");
    this.setState({
      toDoItems:[...this.state.toDoItems,this.state.newItem],
      newItem:''
    });
  }
  OnTextBoxChange = (e) =>{
    console.log('value : ' + e.target.value);

    this.setState({
      newItem: e.target.value
    });
  }
  render(){
    return (
      <div className={"container"}>
      <h1>Things I Should Start Doing: </h1>
 < ListContainer todoItems = {this.state.toDoItems}/>
 <hr/>
 <form>
   <input type="text" placeholder="type an item here"  value={this.state.newItem} onChange={this.OnTextBoxChange}/>
   <button onClick={this.addItem}>Add Item!</button>
 </form>
      </div>
  )}
}


