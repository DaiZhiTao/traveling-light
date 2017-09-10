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
  });

// 注册
  router.get('/register',(req, res, next) => {
    res.render('user/register', { title: '注册'});
  });

module.exports = router;
