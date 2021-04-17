const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var password = require("../objects/password");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlencodedParser, function (req, res) {
  console.log(req.body);
  var temp = false;
  if (req.body.specialCharacters === "on") {
    console.log("special characters are on");
    temp = true;
  }
  var userPassword = new password(req.body.length, temp);
  res.render("password", { pass: userPassword });
});
router.all("/", function (req, res) {
  res.render("enterPassword");
});

module.exports = router;
