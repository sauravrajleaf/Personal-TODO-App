const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// @route       POST        api/users
// @desc        Register a user
// @access      Public
router.post(
  "/",
  [
    body("name", "Please add a name").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("User Saved");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error....");
    }
  }
);

module.exports = router;
