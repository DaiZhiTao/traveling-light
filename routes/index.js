var express = require('express');
var router = express.Router();

/* GET home page. */
// 默认打开广场
router.get('/', function(req, res, next) {
  res.render('user/index', { title: '用户主页' });
});


// 朋友圈
  router.get('/friends-circle',function(req, res, next) {
    res.render('user/friends-circle', { title: '朋友圈'});
  });

// 我的收藏
  router.get('/my-collections',function(req, res, next) {
    res.render('user/my-collections', { title: '我的收藏'});
  });

// 我的攻略
  router.get('/my-raiders',function(req, res, next) {
    res.render('user/my-raiders', { title: '我的攻略'});
  });

module.exports = router;
