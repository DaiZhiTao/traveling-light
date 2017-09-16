
var express = require('express');
var mongo = require('mongoose');
var crypto = require('crypto');
var router = express.Router();

var User = require('../controller/UserController/UserController.js');
var UserInstance = new User();



/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('后台页面');
});

// 注册接口

router.post('/register',(req, res, next) => {

  var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
  var password= md5.update(req.body.pass).digest('hex');//加密后的密码

  // 将用户保存到数据库
  UserInstance.save({
    telphone:telphone,
    password:password
  });


  res.send('save to mongo');

});
module.exports = router;

// 查看用户是否存在
  router.get('/isExist',(req, res, next) => {
    // 获取用户输入的电话
    var tel = req.body.tel;
    UserInstance.isExist({
      telphone:tel
    });
  });
