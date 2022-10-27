import React from 'react'
import {useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const idRef = useRef();
  const pwRef = useRef();

  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginInfo = {
      id : idRef.current.value,
      pw : pwRef.current.value
    }
    axios.post('http://127.0.0.1:3001/login', {
      user : loginInfo
    })
    .then((res)=>{
      console.log(res)
      if (res.data.result == 'success') {
        alert(loginInfo.id + '님 환영합니다!');
        nav('/')
      } else {
        alert('존재하지 않는 아이디입니다.');
      }
    })
    .catch(()=>{console.log('실패')})
  }

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleLogin}>
        <input type="text" ref={idRef} name="id" placeholder='ID를 입력하세요'></input> <br></br>
        <input type="password" ref={pwRef} name="pw" placeholder='PW를 입력하세요'></input><br></br>
        <input type="submit" value="로그인"></input>
      </form>
    </div>
  )
}

export default Login
