
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



  module.exports = router;
