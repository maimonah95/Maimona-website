import React from 'react';

export default class Hello extends React.Component{
    //why we need it ??
    constructor(props){
        //do we need to write it ??
     super(props);
  //Define an initial state
        this.state = {
            moodPoint: 0,
            loggedIn:false,
        };
    }
    //get called when the button is clicked!
    increaseMood = (e) => {
        console.log('button clicked!');
        this.setState({
            moodPoint : this.state.moodPoint +1,
            loggedIn:true,
        });
    }
render(){
    return(
        <div>
        <p> Hello {this.props.name}!</p>
        <p>you are {this.props.age}years old!</p>
        <p>favorites {this.props.favorites}</p>
        <hr/>
        <p> you  are happy :-9000</p>
        <button onClick={this.increaseMood}>cheer up!</button>
        </div>
    );
}
}