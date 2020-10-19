import React from "react";
import ListItem from "./ListItem";


export default class ListContainer extends React.Component {
  render() {
    const allFruits = this.props.fruits.map(function (Fruits,index){
      return <ListItem Name={Fruits} key={index}/>
    })
     
    
    return (
      <ul>
        {allFruits}
      </ul>
    );
  }
}
