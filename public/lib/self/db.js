const mongo = require('mongoose');
const uri = 'mongodb://localhost/traveling';

mongo.Promise = global.Promise;

// 数据操作类
class DB{
  // 构造函数
  constructor (){
    mongo.connect(uri,{useMongoClient:true});
    this.db = mongo.connection;
    this.db.on('error',(e) => {
      console.log(e);
    });

    this.db.once('open',() => {
      console.log(`connect to ${uri} success!`);
    });
  }
}

module.exports = DB;
