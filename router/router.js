const express = require('express');
const router = express.Router();

// DB 세팅
const conn = require('../config/DBConfig.js');

router.get('/', (req, res) => {
    console.log('happy hacking!');
});


module.exports = router;