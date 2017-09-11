const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义模式 UserSchema
UserSchema = new Schema({
    id: Number,
    telphone: String,
    password: String,
    name: String,
    date: Date
},{
  versionKey: false
});

// 定义用户模型

const User = mongoose.model(`User`,UserSchema);

module.exports = User;
