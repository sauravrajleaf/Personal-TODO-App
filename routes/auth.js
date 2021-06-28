const express = require("express");

const router = express.Router();

// @route       POST        api/auth
// @desc        Authenticates a user & gets token
// @access      Public
router.post("/", (req, res) => {
  res.send("Authenticating a user");
});

// @route       GET        api/uauth
// @desc        Get data of a logged in user
// @access      Private
router.get("/", (req, res) => {
  res.send("Get the data of a logged in user");
});

module.exports = router;
