const express = require("express");

const app = express(); //INITIALIZING EXPRESS

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to your Personal TODO App" })
); //Added an endpoint or route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
