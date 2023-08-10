// import React from 'react'

// function Hello(props) {
//   return (

//     <div style = {{ color : props.color}}>안녕하세요 {props.name}</div>

//   )
// }

// export default Hello;

import React, { Component } from 'react'

class Hello extends Component {

    constructor(props) {

        super(props);
        this.state = {

            name : this.props.name + "!", 
            color : this.props.color

        }

    }
  render() {
    return (
      <div style={{ color : this.state.color }}>

        안녕하세요 {this.state.name}

      </div>
    )
  }
}

export default Hello
