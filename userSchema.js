const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: {type: String, required: true},
  password: {type: String, required: true},
  adress: {
    city: String,
    code: {type: Number, required: true},
  }
});

const Users = mongoose.model("users",  userSchema);
module.exports = Users;
