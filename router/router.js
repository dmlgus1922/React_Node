const express = require('express');
const router = express.Router();
const path = require('path');
// DB 세팅
const conn = require('../config/DBConfig.js');

router.get('*', (req, res) => {
    console.log('happy hacking!');
    res.sendFile(path.join(__dirname, '..','react-project', 'build', 'index.html'))
});


module.exports = router;