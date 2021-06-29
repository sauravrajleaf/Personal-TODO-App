const mongoose = require("mongoose");

const TodosSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  todo_data: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todos", TodosSchema);
