import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    console.log ("rendering");
    return (
      <article> 
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>

    )
  }
}
