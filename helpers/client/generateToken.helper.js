const jwt = require("jsonwebtoken");

module.exports.generateToken = (id) => {
  console.log("SECRET_KEY:", process.env.SECRET_KEY); // Kiểm tra giá trị SECRET_KEY

  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is missing");
  }

  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};
