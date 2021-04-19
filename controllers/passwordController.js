const express = require("express");
const bodyParser = require("body-parser");
var app = express();
const router = express.Router();
const mongoose = require("mongoose");

const Passwords = require("../models/passwords");

var passwordObject = require("../objects/password");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.all("/", function (req, res) {
  res.render("enterPassword");
});

//return whole database
router.get("/allPasswords", function (req, res) {
  Passwords.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//finding passwords to display them and finding them to delete them.
router.get("/:name", (req, res, next) => {
  const name = req.params.name;
  Passwords.find({ name: name })
    .exec()
    .then((doc) => {
      console.log("from database " + doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// router.get("/delete", (req, res, next) => {
//   res.redirect("/passwordgenerator");
// });

//delete function
router.get("/delete/:name", urlencodedParser, (req, res, next) => {
  console.log("made it to delete");
  const passName = req.params.name;
  Passwords.remove({ name: passName })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.post("/delete", urlencodedParser, (req, res, next) => {
  res.redirect("/passwordgenerator/delete/" + req.body.name);
});

//search function
router.post("/search", urlencodedParser, (req, res, next) => {
  res.redirect("/passwordgenerator/" + req.body.name);
});

router.post("/enter", urlencodedParser, function (req, res) {
  console.log(req.body);
  var temp = false;
  if (req.body.specialCharacters === "on") {
    console.log("special characters are on");
    temp = true;
  }

  var userPassword = new passwordObject(req.body.length, temp);
  const passName = req.body.name.toLowerCase();
  const password = new Passwords({
    _id: new mongoose.Types.ObjectId(),
    name: passName,
    password: userPassword.id,
  });
  password
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(201).json({
        message: "Handling POST requests to /enter",
        createdPassword: password,
      });
    });
  res.render("password", { pass: userPassword });
});

module.exports = router;
