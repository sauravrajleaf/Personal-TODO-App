const express = require("express");

const router = express.Router();

//MIDDLEWARE
const auth = require("../middleware/auth");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Todos = require("../models/Todos");

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

// @route           POST        /api/todos
// @desc            Post/Write a TODO
// @access          Private
router.post(
  "/",
  [auth, [body("todo_data", "Todo is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { todo_data } = req.body;

    try {
      const newTodos = new Todos({
        todo_data,
        user: req.user.id,
      });

      const todo = await newTodos.save();

      res.json(todo);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error.....");
    }
  }
);

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
