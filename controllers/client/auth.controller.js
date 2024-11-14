const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../../models/users.models");
const genTokenHelper = require("../../helpers/client/generateToken.helper");
module.exports.register = (req, res) => {
  res.render("client/pages/auth/register", { title: "Đăng ký" });
};
module.exports.registerPost = async (req, res) => {
  const { username, email, password } = req.body;

  // Kiểm tra dữ liệu yêu cầu (đảm bảo email và mật khẩu được cung cấp)
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({
        message:
          "Vui lòng cung cấp đầy đủ thông tin (username, email, password)",
      });
  }

  try {
    // Kiểm tra xem email đã tồn tại chưa
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    // Lưu người dùng vào cơ sở dữ liệu
    await newUser.save();

    // Trả về thông báo thành công
    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (error) {
    console.error("Lỗi khi đăng ký người dùng:", error);
    // Cung cấp thông báo lỗi chi tiết
    res.status(500).json({ message: "Lỗi server: " + error.message });
  }
};

module.exports.login = (req, res) => {
  res.render("client/pages/auth/login", { title: "Đăng nhập" });
};

module.exports.loginPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm người dùng theo email
    const user = await userModel.findOne({ email });

    // Kiểm tra người dùng có tồn tại không
    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    // Kiểm tra mật khẩu
    console.log("Entered password:", password);
    console.log("Stored password hash:", user.password);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Mật khẩu không đúng" });
    }
    if (user && validPassword) {
      return res.status(200).json({ user });
    }
    // Tạo token và trả về
    try {
      const token = genTokenHelper.generateToken(user._id);
      res.json({ user, token });
    } catch (error) {
      console.error("Lỗi khi tạo token:", error);
      return res.status(500).json({ message: "Lỗi khi tạo token" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
