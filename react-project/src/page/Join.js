import React, { useRef } from 'react'

const Join = () => {
    const idRef = useRef();
    const pwRef = useRef();
    
    const handleJoin = (e) => {
        e.preventDefault();
        // form 태그가 다른 페이지로 이동하지 못하도록 만듦

        console.log('id:', idRef.current.value);
        console.log('pw:', pwRef.current.value);
    }

    return (
        <div>
            <h3>회원가입</h3>
            <form onSubmit={handleJoin}>
                <input type="text" ref={idRef} name="id" placeholder='ID를 입력하시오'></input><br></br>
                <input type="password" ref={pwRef} name="pw" placeholder='PW를 입력하시오'></input><br></br>
                <input type="submit" value="가입신청"></input>
            </form>
        </div>
    )
}

export default Join
