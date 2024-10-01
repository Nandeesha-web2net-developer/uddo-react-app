const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  jobtitle: String,
  companyname: String,
  workmode: String,
  salary: String,
  jobtype: String,
  experience: String,
  englishlevel: String,
  location: String,
  // image:String,
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
