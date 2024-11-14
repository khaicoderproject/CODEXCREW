const loginRoute = require("./login.route");

module.exports = (app) => {
  app.use("/auth", loginRoute);
};
