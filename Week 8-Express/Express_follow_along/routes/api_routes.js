const todo_router = require("express").Router();
const { response } = require("express");
const fs = require("fs");
const path = require("path");
const db_path = path.join(__dirname, "../db/todos.json");

function getTodoData() {
  return fs.promises
    .readFile(db_path, "utf-8")
    .then((data) => JSON.parse(data));
}

// Get All Todos
todo_router.get("/todos", (req, res) => {
  getTodoData()
    .then((todo_data) => {
      res.json(todo_data);
    })
    .catch((err) => console.log(err));
});

// Give All Todos
todo_router.post("/todos", (req, res) => {
  getTodoData().then((todo_data) => {
    const new_todo = req.body;
    const reference_id = todo_data.length ? todo_data[todo_data.length - 1].id : 0 ;
    new_todo.id = reference_id + 1;

    todo_data.push(new_todo);

    fs.promises
      .writeFile(db_path, JSON.stringify(todo_data, null, 2))
      .then(() => res.json(todo_data))
      .catch((err) => console.log(err));
  });
});

// Delete (localhost:3333/api/todos) Request
todo_router.delete("/todos", (req, res) => {
  getTodoData().then((todos) => {
    const id = req.body.id;
    const obj = todos.find((todo) => todo.id === id);
    const index = todos.indexOf(obj);

    todos.splice(index, 1);

    fs.promises
      .writeFile(db_path, JSON.stringify(todos, null, 2))
      .then(() => {
        console.log("todos updates successfully!");
        res.json(todos);
      })
      .catch((err) => console.log(err));
  });
});

module.exports = todo_router;
