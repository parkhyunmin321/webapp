import React, { Component } from 'react'


class User extends Component {
  render() {
    
    return (
        <section className="inputId">

            UI<input 
            className = "loginUI"
            type = "text"
            />
            <br></br>

            ID<input                      // 첫번째 input
            className="loginId"
            type="text"
            //placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <br></br>
            
            PW<input                      // 두번째 input
            className="loginInput"
            type="password"
            //placeholder="비밀번호"

            
          />
        </section>
      );
    }
  
}

export default User
