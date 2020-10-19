import React from 'react';

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <label>Search this fruits: </label>
                <input type = "text" value = {this.props.value} onChange={this.props.onChange}/>
                
            </div>
        )
    }
}