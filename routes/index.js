
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('后台页面');
});

// 注册接口

router.post('/register',function(req, res,next){
  res.send({
    option: 123
  });
});
module.exports = router;
