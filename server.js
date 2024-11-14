const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3999;
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
const methodOverride = require("method-override");
const path = require("path");
const database = require("./config/database.config");
const bodyParser = require("body-parser");
const systemConfig = require("./config/system.config");
database.connect();

app.use(express.static(`${__dirname}/public`)); ////thêm dirname vì khi deploy server sẽ k hiểu duoc.

app.use(express.json()); // Hỗ trợ phân tích JSON trong body
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false })); //hỗ trợ req body
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
