const authRoute = require("./auth.route");
const dashboardRoute = require("./dashboard.route");
const systemConfig = require("../../config/system.config");
const roleRouter = require("./role.route");
module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboardRoute);
  app.use(PATH_ADMIN + "/role", roleRouter); //authMiddleware.requireAuth
};
