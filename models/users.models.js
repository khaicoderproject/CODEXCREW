const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const genTokenHelper = require("../helpers/client/gentokenv2.helper");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokenUser: {
    type: String,
    default: () => genTokenHelper.generateRandomString(20),
  },
});

// Hàm mã hóa mật khẩu trước khi lưu vào database
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // So sánh mật khẩu
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const user = mongoose.model("user", userSchema, "users");

module.exports = user;
