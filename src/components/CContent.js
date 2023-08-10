import React, { Component } from 'react'

export default class Content extends Component {
   constructor(props) {
      super(props);
        this.state = {
            counter : 0
        }
   }
   
   handleClick(e) {

       const newCount = this.state.counter + 1;

       newCount  < 10 
       ? this.setState({counter : newCount})
       : this.setState({counter : 0})
   }

   render() {
     return (
      <div>
          <button 
            onClick={this.handleClick.bind(this)} 
            className="btn btn-primary"
          >
              Click me {this.state.counter}
           </button>
        
      </div>
     )
   }
}