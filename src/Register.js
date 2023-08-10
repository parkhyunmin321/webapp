import React, { useState } from "react";
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  const {email, setEmail} = useState('');
  const {id, setID} = useState('');
  const {password, setPassword} = useState('');
  const {confirmpassword, setConfirmPassword} = useState('');

  const signIn = e => {
    // e.preventDefault('');
}

  const register = e => {
    // e.preventDefault('');
}

  return (
    <div>
       <div className = 'login'>

 {/* <Link to = '/'>
    <img className = 'login_logo'
    src = ''
    alt = ''/>
</Link>  */}

<div className = 'login_container'>
    <h1>회원가입</h1>
    <form>
        <h5>이메일</h5>
        <input value = {email} onChange = {e => setEmail(e.target.value)}
        type = 'email' placeholder = '이메일을 입력해주세요'/>
        <h5>아이디</h5>
        <input value = {id} onChange = {e => setID(e.target.value)}
        type = 'text' placeholder = '아이디를 입력해주세요'/>
        <h5>비밀번호</h5>
        <input value = {password} onChange = {e => setPassword(e.target.value)}
        type = 'password' name = 'pwd1' placeholder = '비밀번호를 입력해주세요'/>
        <h5>비밀번호 확인</h5>
        <input value = {password} onChange = {e => setConfirmPassword(e.target.value)}
        type = 'password' name = 'pwd2' placeholder = '비밀번호를 다시 한번 입력해주세요'/>
        
        <Link to = '/Login'>
         <button onClick = {signIn} className = 'login_signInputButton'><strong>확인</strong></button>
         </Link>
         
         &nbsp;

         <Link to = '/'>
         <button onClick = {register} className = 'login_registerInputButton'>취소</button>
         </Link>
    </form>
</div>
</div>
</div>
  )
}
