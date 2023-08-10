// import './App.css';
// import Subject from './components/Subject'
// import TOC from './components/TOC'
// import Content from './components/Content';

// import React, {Component} from 'react';

// class  App extends Component {
//   constructor(props) {
//     super(props);
//     // 초기 mode 는 welcome 을 가짐  
//     this.state = {
//       mode : 'read',
//       subject : { title : "Web", sub : "World Wide Web" },
//       welcome : { title : "Welcome", desc : "Hello, React" },
//       contents : [
//           {id :1, title : 'HTML', desc :'HTML is a markup lanaguage for Internet'},
//           {id :2, title : 'CSS', desc : 'CSS stands for Cascade Style Sheet'},
//           {id :3, title : 'JavaScript', desc : 'JavaScript is for interactive'}
//       ]

//       }
//     }
  
//   // bind(this) 를 사용하여 이벤트 처리 객체를 함수에서  state 값을 지정하도록 setState()수행함 
//   render() {

//     let _title, _desc = null;

//     if (this.state.mode == 'welcome') {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//     } else if (this.state.mode == 'read') {
//       _title = this.state.contents[0].title;
//       _desc = this.state.contents[0].desc;
//     }
//     return (

//     <div className="App">
//        <header>
//            <h1><a href ="/" onClick={ function(e) 
//           {
//             console.log("event in", this);
//             e.preventDefault();
//             if (this.state.mode == 'welcome') {
//               this.setState( { mode : "read"});
//             } else if (this.state.mode == 'read') {
//               this.setState( { mode : "welcome"});
//             }
              
//           }.bind(this) }>{this.state.subject.title}</a></h1>
//            {this.state.subject.sub}
//       </header>
//         <Subject />
//        <TOC />
//        <Content title={_title}  desc ={_desc} />
//     </div>
//   )
//  }
// }

// export default App;


import React, { Component } from 'react'
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {auth} from "./firebase";

export default function App() {
  // const [{}, dispatch] = useStateValue();
//   useEffect( () => {
//     auth.onAuthStateChanged(authUser => {
//       console.log(authUser);
//       if(authUser) {
//         dispatch({
//           type: 'SET_USER',
//           user: authUser
//         })
//       } else {
// dispatch ({
// type: 'SET_USER',
// user: null
// })
//       }
//   })
// }, [])

  return (
    <Router>

    <div className = "App">
    <Header />
      <Routes>
        
        <Route path = "/" element = {<Home />} />             {/* 해당 주소에 들어갈 컴포넌트들을 지정 */}

        <Route path = "/checkout" element = {<Checkout />}/>
        
        <Route path = "/Login" element = {<Login />} />

        <Route path = "/Register" element = {<Register />} />

      </Routes>
    </div>

  </Router>
)
}




  




