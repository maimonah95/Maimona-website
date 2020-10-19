import React from "react";
import ListContainer from "./ListContainer";
import Search from "./Search";
export default class App extends React.Component {
  constructor(props) {
    super(props);
//initalize the search value to 
    this.state = {
      searchValue: "",
      fruitsToDisplay:this.props.fruits,
      //
      fruitsToNotDisplay:[],
      frut:[],
    };
  }
  // onChange = (e) => {};
  handleSearchChange = (e) => {
    const textValue = e.target.value;

    // take the text box current value
    //filter the fruits array into a new array
    console.log('Box' , textValue)
    const filteredFruteList = this.props.fruits.filter(function(fruit){
      return fruit.toLowerCase().includes(textValue.toLowerCase());
    });
    ///
    const filteredFruteList2 = this.props.fruits.filter(function(fruit) {
      return !fruit.toLowerCase().includes(textValue.toLowerCase());
        });
    this.setState({
      searchValue : textValue,
      fruitsToDisplay:filteredFruteList,
      fruitsToNotDisplay:filteredFruteList2,
    });
  };
  render() {
    return (
      <div>
        <h1> Fruits</h1>
        <Search
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />
        <ListContainer
          fruits={this.state.fruitsToDisplay}
        />

        <ListContainer fruits={this.state.fruitsToNotDisplay} />
      </div>
    );
  }
}
