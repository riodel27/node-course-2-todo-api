const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text
    });

    const result = await todo.save();

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
