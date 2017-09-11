
var express = require('express');
var mongo = require('mongoose');
var router = express.Router();

var User = require('../controller/UserController/UserController.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('后台页面');
});

// 注册接口

router.post('/register',(req, res,next) => {
  res.send({
    option: 123
  });
});
module.exports = router;
