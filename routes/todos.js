const express = require("express");

const router = express.Router();

//MIDDLEWARE
const auth = require("../middleware/auth");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Todos = require("../models/Todos");

// @route           POST        /api/todos
// @desc            Post/Write a TODO
// @access          Private
router.post("/", (req, res) => {
  res.send("Posts a TODO");
});

// @route           GET        /api/todos
// @desc            Get all TODOs
// @access          Private
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todos.find({ user: req.user.id }).sort({ date: -1 });

    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error..");
  }
});

// @route           PUT        /api/todos
// @desc            Updates a TODO
// @access          Private
router.put("/:id", (req, res) => {
  res.send("Updates a TODO");
});

// @route           DELETE       /api/todos
// @desc            Deletes a TODO
// @access          Private
router.delete("/:id", (req, res) => {
  res.send("Deletes  a TODO");
});

module.exports = router;
