import React, { Component } from 'react'

class CounterHooks extends React.Component {

  constructor(props){

    super(props);
    this.state = {

      count : 0,
      color : "red"

    }

  }

  increment = () => {

      this.setState({
        count : this.state.count + 1
      })
  }

  decrement = () => {

    this.setState({
      count : Math.max(this.state.count - 1)
    })
  }

  increment_by_2 = () => {

    this.setState({
      count : this.state.count + 2
    })
  }
  
  change_color = () => {

    console.log (this.state.color);
    const newColor = (this.state.color == "red") ? "blue" : "red"

    this.setState({

      color : newColor

    })
  }

  render() {
    return (
      <div className = "counter">
        <h1>COUNTER</h1>
        <div className = "buttons">
        
          <button onClick = {this.increment}>Increment</button>
          <button Increment_by_2 onClick = {this.increment_by_2}>Increment_by_2</button>
          <button onClick = {this.decrement}>Decrement</button>
          <button onClick = {this.change_color}>Change_color</button>

        </div>
          <p>{this.state.count}</p>
          <p style = {{color : this.state.color}}>{this.state.color}</p>
    
      </div>
    )
  }
}

export default CounterHooks
