const submit_btn = document.querySelector("#submit");
const todos_div = document.querySelector(".todos");
const message_bar = document.querySelector(".message-bar");
let todo_data;

function showMessage(message) {
  message_bar.innerText = message;
  message_bar.classList.add("show");

  setTimeout(() => {
    message_bar.classList.remove("show");
  }, 3500);
}

function outputToDos() {
  todos_div.innerHTML = "";

  if (!todo_data.length) {
    todos_div.innerHTML = `<p>No ToDos Added Yet</p>`;
  }

  todo_data.forEach((obj) => {
    const html = `
      <div class="todo">
        <h3>${obj.words}</h3>
        <button data-id="${obj.id}">Delete</button>
      </div>
    `;
    todos_div.insertAdjacentHTML("beforeend", html);
  });
}

function getTodos() {
  return fetch("/api/todos")
    .then((res) => res.json())
    .then((todos) => {
      todo_data = todos;
      outputToDos();
    });
}

function addTodo(event) {
  const input = document.querySelector('input[name="somethin"]');
  const value = input.value;
  const new_todo = {
    words: value,
  };

  event.preventDefault();

  fetch("/api/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(new_todo),
  })
    .then((res) => res.json())
    .then((info) => {
      new_todo.id = info.id;
      todo_data.push(new_todo);
      // .then((todos) => {
      // console.log(todos);
      getTodos();
      //   .then(outputToDos);
      outputToDos();
      input.value = "";
      showMessage(info.message);
    });
}

// JQuery shortcut of the above.
// $.post('/api/todos', data).then(res => console.log(res));

function deleteTodo(event) {
  const el = event.target;

  if (el.tagName === "BUTTON") {
    const id = el.dataset.id;
    const data = {
      id: id,
    };

    fetch("/api/todos", {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((info) => {
        const todo = todo_data.find((todo_obj) => todo_obj.id == id);
        const index = todo_data.indexOf(todo);
        todo_data.splice(index, 1);
        outputToDos();
        showMessage(info.message);
      });
  }
}

getTodos()
  .then((todos) => submit_btn.addEventListener("click", addTodo))
  .then((todos) => todos_div.addEventListener("click", deleteTodo));
