const permissions = {
  canEdit: true,
  canDelete: true,
  canSave: true,
};

module.exports.index = (req, res) => {
  res.render("admin/pages/dashboard", { title: "Trang chủ", path: req.path });
};

module.exports.members = (req, res) => {
  const data = [
    { name: "Nguyen Van A", email: "a@gmail.com", phone: "12345678", address: "aDepChai" },
    { name: "Nguyen Van B", email: "b@gmail.com", phone: "12345678", address: "aDepChai" },
  ];
  const columns = [...new Set(data.flatMap(Object.keys))];

  res.render("admin/pages/dashboard/members", {
    title: "Tìm kiếm đoàn viên",
    path: req.path,
    columns,
    data,
    permissions,
  });
};
