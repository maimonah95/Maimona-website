import React from 'react';

export default class ListItem extends React.Component{
    constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    }
    render(){
        return (
          <div>
            <input type="checkbox" value="coconut"  />
            Grapefruit
            <li>{this.props.Name}</li>
          </div>
        );
    }
}