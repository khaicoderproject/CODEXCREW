module.exports.index = (req, res) => {
  res.send("Day la dashboard");
};

module.exports.members = (req, res) => {
  res.render("client/pages/dashboard/members", { title: "Tìm kiếm đoàn viên" });
};
