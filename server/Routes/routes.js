const express = require("express");
const router = express.Router();
const user = require("../models/formSchema");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
//Routes--------------------------------------
router.get("/", (req, res) => {
  res.send("Server is working");
});

//user schema
router.post("/submit", (req, res) => {
  var userData = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    massege: req.body.massege,
  };
  res.send(req.body);
  new user(userData).save();
});
module.exports = router;
