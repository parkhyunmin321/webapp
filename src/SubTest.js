import React, { Component } from 'react'

class SubTest extends Component {

    render(){
    return (
        <button onClick={function(){
            console.log('in Clicked', this.props.title);
            this.props.onClick();
            }.bind(this)}
            >{this.props.title}</button>
        )
    }
}

export default SubTest;

