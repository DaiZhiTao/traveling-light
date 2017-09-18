const CONF = require('../../../config.js');
const mongo = require('mongoose');

mongo.Promise = global.Promise;

// 数据操作类
class DB{
  // 构造函数
  constructor (){
    mongo.connect(CONF.mongo.uri,{useMongoClient:true});
    this.db = mongo.connection;
    this.db.on('error',(e) => {
      console.log(e);
    });

    this.db.once('open',() => {
      console.log(`connect to ${CONF.mongo.uri} success!`);
    });
  }
}

module.exports = DB;
