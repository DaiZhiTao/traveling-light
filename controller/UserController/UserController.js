const DB =  require('../../public/lib/self/db.js');
const UserModel = require('../../Model/UserModel/User.js');

class User extends DB{
  constructor (){
    super();
  }

  // 判断用户是否存在
  isExist (options,callback){
    var user = UserModel.find(options,(err, docs) => {
      if(!err){
        callback(docs);
      }else{
        callback({
          errno : 3001,
          error : '用户已存在'
        });
      }
    });
  }

  // 添加数据
  save (data,callback){
    var user = new UserModel(data);
    user.save((err) => {
      callback(err);
    });
  }
}

module.exports = User;
