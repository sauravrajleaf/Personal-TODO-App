const express = require("express");

const router = express.Router();

// @route           POST        /api/todos
// @desc            Post/Write a TODO
// @access          Private
router.post("/", (req, res) => {
  res.send("Posts a TODO");
});

// @route           GET        /api/todos
// @desc            Get all TODOs
// @access          Private
router.get("/", (req, res) => {
  res.send("Get all TODOs");
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
