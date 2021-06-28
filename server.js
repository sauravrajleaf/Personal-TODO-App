const express = require("express");

const app = express(); //INITIALIZING EXPRESS

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to your Personal TODO App" })
); //Added an endpoint or route

//Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/todos", require("./routes/todos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
