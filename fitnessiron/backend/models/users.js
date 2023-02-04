const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const user = new Schema({
  username : String,
  password: String,
  mail: String,
  genre: String,
  media: Number,
  height: Number


})

const Users = mongoose.model('users', user);
module.exports = Users;