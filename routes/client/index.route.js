const loginRoute = require("./login.route");
const dashboardRoute = require("./dashboard.route");
module.exports = (app) => {
  app.use("/", dashboardRoute);
  app.use("/auth", loginRoute);
};
