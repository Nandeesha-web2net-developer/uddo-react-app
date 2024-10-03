const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  jobtitle: String,
  companyname: String,
  workmode: String,
  salaryFrom: String,
  salaryTo: String,
  paytype: String,
  jobtype: String,
  experience: String,
  englishlevel: String,
  location: String,
  interviewType: String,
  interviewAddress: String,
  description: String,
  qualification: String,
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
