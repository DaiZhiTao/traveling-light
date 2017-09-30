var express = require('express');
var router = express.Router();

/* GET home page. */
// 默认主页
router.get('/', (req, res, next) => {
  res.render('user/index', { title: '用户主页' });
});


// 朋友圈
  router.get('/friends-circle',(req, res, next) => {
    res.render('user/friends-circle', { title: '朋友圈'});
  });

// 我的收藏
  router.get('/my-collections',(req, res, next) => {
    res.render('user/my-collections', { title: '我的收藏'});
  });

// 我的资料
  router.get('/my-data',(req, res, next) => {
    res.render('user/my-data', { title: '我的资料'});
  });

// 我的好友
  router.get('/my-friends',(req, res, next) => {
    res.render('user/my-friends', { title: '我的好友'});
  });

// 我的发布
  router.get('/my-pub',(req, res, next) => {
    res.render('user/my-pub',{ title: '我的发布'});
  });

// 登录
  router.get('/login',(req, res, next) => {
    res.render('user/login', { title: '登录'});
  }).post('/login',(req, res) => {
    var md5  = cry = crypto.create('md5');
    var password = md5.update(req.body.password);
    var account = req.body.account;

    UserInstance.isExist({
      telphone: account,
      password: password
    },(data) => {
        res.send('hello');
    });
  });

// 注册
  router.get('/register',(req, res, next) => {
    res.render('user/register', { title: '注册'});
  }).post('/register',(req, res) => {

    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    var password= md5.update(req.body.pass).digest('hex');//加密后的密码

    // 将用户保存到数据库
    UserInstance.save({
      telphone:req.body.telphone,
      password:password
    },(err) => {
      if(!err){
        // res.cookie("account", {account: req.body.telphone, password: password}, {maxAge: 60000});

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


  // 注册接口


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
