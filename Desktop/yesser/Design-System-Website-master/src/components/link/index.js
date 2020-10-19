import React from 'react';
 


export default class Accordion extends React.Component {
    render() {
        return (
            <a href={this.props.href} className="govsa-link"> {this.props.text} </a>
        )
    }

}