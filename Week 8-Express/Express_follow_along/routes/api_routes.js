const todo_router = require("express").Router();
const db = require("../db/connection")
// const { response } = require("express");
// const fs = require("fs");
// const path = require("path");
// const uuid = require("uuid").v4;
// const db_path = path.join(__dirname, "../db/todos.json");



// function getTodoData() {
//   return fs.promises
//     .readFile(db_path, "utf-8")
//     .then((data) => JSON.parse(data));
// }

// Get All Todos
todo_router.get("/todos", (req, res) => {
  db.query('SELECT * FROM todos', (err, data) => {
    if (err) return console.log(err);

    res.json(data);
  });
  // getTodoData()
  //   .then((todo_data) => {
  //     res.json(todo_data);
  //   })
  //   .catch((err) => console.log(err));
});

// Create Todo
todo_router.post("/todos", (req, res) => {
  db.query('INSERT INTO todos SET ?', req.body,
    (err, data) => {
      if (err) return console.log(err);
      console.log(data)
      res.json({
        id: data.insertID,
        message: 'Added ToDo successfully'
      });
    });

  // getTodoData().then((todo_data) => {
  //   const new_todo = req.body;

  // Create multiple-char IDs
  // new_todo.id = uuid().slice(0, 4);

  // Create single-char IDs
  // const reference_id = todo_data.length ? todo_data[todo_data.length - 1].id : 0 ;
  // new_todo.id = reference_id + 1;

  // todo_data.push(new_todo);

  // fs.promises
  //   .writeFile(db_path, JSON.stringify(todo_data, null, 2))
  //   .then(() => res.json(todo_data))
  //   .catch((err) => console.log(err));
});

// Delete (localhost:3333/api/todos) Request
todo_router.delete("/todos", (req, res) => {
  const id = req.body.id;

  db.query('DELETE FROM todos WHERE id = ?', id, (err, info) => {
    if (err) return console.log(err)

    res.json({
      message: `Todo with id of ${id} has been deleted successfully.`
    })
  })

  // getTodoData().then((todos) => {
  //   const id = req.body.id;
  //   const obj = todos.find((todo) => todo.id === id);
  //   const index = todos.indexOf(obj);

  //   todos.splice(index, 1);

  //   fs.promises
  //     .writeFile(db_path, JSON.stringify(todos, null, 2))
  //     .then(() => {
  //       console.log("todos updates successfully!");
  //       res.json(todos);
  //     })
  //     .catch((err) => console.log(err));
  // });
});

todo_router.get("/todos/:id/:comment", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.comment);
});

module.exports = todo_router;
