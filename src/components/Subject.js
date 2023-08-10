import React, { Component } from 'react'

// 링크를 추가함
export default class Subject extends Component {
  render() {
    const {title, sub} = this.props;
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
       {this.props.sub}
      </header>
    )
  }
}