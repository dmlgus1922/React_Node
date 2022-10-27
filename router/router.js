const express = require('express');
const router = express.Router();
const path = require('path');
// DB 세팅
const conn = require('../config/DBConfig.js');

router.post('/joinData', (req, res) => {
    console.log(req.body.user)
    const sql = 'insert into member values(?, ?, 3)'
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows) => {
        if (rows) {
            console.log('회원가입 성공');
            res.json({
                result : 'success'
            })
        } else {
            console.log('회원가입 실패');
            res.json({
                result : 'fail'
            })
        }
    });
});

router.post('/login', (req, res) => {
    const id = req.body.user.id;
    const pw = req.body.user.pw;

    const sql = 'select * from member where id=? and pw=?'
    conn.query(sql, [id, pw], (err, rows) => {
        console.log(rows);
        if (err) {
            console.log('아이디 검색 실패');
        } else if (rows.length > 0) {
            console.log('로그인 성공');
            res.json({
                result : 'success'
            });
        } else {
            console.log('아이디가 없습니다');
            res.json({
                result : 'fail'
            });
        }
    });
})

// 이 윗줄은 서버 라우터
// 서버 log는 monit에 뜸 
// 이 아랫줄은 리액트 라우터 작성 (아래 *를 통해 아래 라우터는 전권을 리액트에게 주겠다는 뜻 )
// 리액트에서 치는 콘솔은 화면 log에 뜸


router.get('*', (req, res) => {
    console.log('happy hacking!');
    // /로 들어오면 아래로 보내주겠습니다. 
    // 현재 디렉토리에서 상위폴더로 가서 build폴더의 index.html로 보내주겠다. 
    res.sendFile(path.join(__dirname, '..','react-project', 'build', 'index.html'))
});


module.exports = router;