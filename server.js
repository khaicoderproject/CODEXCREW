const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3999;
const route = require("./routes/client/index.route");
const path = require("path");
const database = require("./config/database.config");
const bodyParser = require("body-parser");
database.connect();

app.use(express.static(`${__dirname}/public`)); ////thêm dirname vì khi deploy server sẽ k hiểu duoc.

app.use(express.json()); // Hỗ trợ phân tích JSON trong body
app.use(bodyParser.urlencoded({ extended: false })); //hỗ trợ req body
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
