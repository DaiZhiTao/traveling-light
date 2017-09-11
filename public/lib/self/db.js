const mongo = require('mongoose');
const uri = 'mongodb://localhost/traveling';

const UserSchema = new mongo.Schema({

});

// 数据操作类
class DB{
  // 构造函数
  constructor (){
    mongo.connect(uri,{useMongoClient:true});
    this.db = mongo.connection;
    this.db.on('error',() => {
      console.log('connect error');
    });

    this.db.once('openUri',() => {
      console.log('connect sucess');
    })
  }
}

module.exports = DB;
