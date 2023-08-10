import React, { Component } from 'react'

export default class TOC extends Component {
  render() {
    console.log("rendering ")

    // let lists = [];
    // let data = this.props.data;

    // data.forEach ((item, index) => {
    //     lists.push(
    //         <li key = {data[index].id}>
    //             <a 
    //                 href = {"/Content/" + data[index].id}
    //                 data-id = {data[index].id}
    //             >{data[index].title}

                    
    //             </a>
    //         </li>
    //     )   
    // })
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    )
  }

}
