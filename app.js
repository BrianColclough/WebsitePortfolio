var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

var controller = require("./controllers/maincontroller.js");
app.use("/", controller);

var passwordController = require("./controllers/passwordController");
app.use("/passwordGenerator", passwordController);

app.listen(8084, function () {
  console.log("listening at 8084");
});
