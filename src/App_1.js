import React, { Component } from 'react'
import './App.css';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'
import Welcome from './components/Welcome'




class App extends Component {
  render() {
    return (
      <div className = "App">

        {/* <Subject name = "WWW"></Subject> */}
        <Subject title = "React" sub = "Web Application"></Subject>
        <Welcome text = "Hello React!"></Welcome>


      </div>
    )
  }
}



export default App;
