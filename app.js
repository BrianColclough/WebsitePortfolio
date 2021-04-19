var express = require("express");
var app = express();
const mongoose = require("mongoose");

console.log(process.env.MONGO_ATLAS_PW);
mongoose.connect(
  "mongodb+srv://Brian:" +
    process.env.MONGO_ATLAS_PW +
    "@passwordgenerator.r5olo.mongodb.net/myFirstDatabase?$retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

var controller = require("./controllers/maincontroller.js");
app.use("/", controller);

var passwordController = require("./controllers/passwordController");
app.use("/passwordGenerator", passwordController);

app.listen(8084, function () {
  console.log("listening at 8084");
});
