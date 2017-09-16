const DB =  require('../../public/lib/self/db.js');
const UserModel = require('../../Model/UserModel/User.js');

class User extends DB{
  constructor (){
    super();
  }

  // 判断用户是否存在
  isExist (options){
    var user = UserModel.find(options,(err, docs) => {
      if(!err){
        console.log(docs);
      }else{
        console.log(err);
      }
    });
  }

  // 添加数据
  save (data){
    var user = new UserModel(data);
    user.save((err) => {
      if(err){
        // console.log(err);
      }else{
        // console.log(`用户添加成功`);
      }
    });
  }
}

module.exports = User;
