import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
 
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    // e.preventDefault('');           새로고침 방지
}

  const register = e => {
    // e.preventDefault('');
}

  return (
    <div>
       <div className = 'login'>

 <Link to = '/'>
    <img className = 'login_logo'
    src = '/icon_user.png'
    alt = ''/>
</Link> 

<div className = 'login_container'>
    <h1>로그인</h1>
    <form>
        <h5>아이디</h5>
        <input value = {id} onChange = {e => setID(e.target.value)}
        type = 'text' placeholder = '아이디를 입력해주세요'/>
        <h5>비밀번호</h5>
        <input value = {password} onChange = {e => setPassword(e.target.value)}
        type = 'password' placeholder = '비밀번호를 입력해주세요'/>

        <Link to = '/'>   
         <button onClick = {signIn} className = 'login_signInputButton'><strong>로그인 하기</strong></button>     {/*이벤트에 함수 자체를 전달
                                                                                                                    로그인 버튼 */}         
        </Link>

        &nbsp;

        <Link to = '/Register'>      
         <button onClick = {register} className = 'login_registerButton'><strong>회원가입</strong></button>         {/*회원가입 버튼*/}
         </Link>
    </form>
</div>
</div>
</div>
  )
}