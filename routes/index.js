
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

router.post('/register',(req, res) => {

  var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
  var password= md5.update(req.body.pass).digest('hex');//加密后的密码

  // 将用户保存到数据库
  UserInstance.save({
    telphone:req.body.telphone,
    password:password
  },(err) => {
    if(!err){
      res.cookie("account", {account: req.body.telphone, password: password}, {maxAge: 60000});

      res.send({
        errno : 1001,
        error : '注册成功',
        data : {
          telphone :req.body.telphone,
          password : password
        }
      });
    }else{
      res.send({
        errno : 4001,
        error : err
      });
    }
  });
});

// 查看用户是否存在
  router.get('/isExist',(req, res, next) => {
    // 获取用户输入的电话
    var tel = req.query.telphone;
    UserInstance.isExist({
      telphone:tel
    },(err) => {
        res.send(err)
    });
  });

  module.exports = router;
