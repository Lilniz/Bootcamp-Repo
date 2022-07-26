const submit_btn = document.querySelector("#submit");
const todos_div = document.querySelector(".todos");

function outputToDos(data) {
  todos_div.innerHTML = "";

  if (!data.length) {
    todos_div.innerHTML = `<p>No ToDos Added Yet</p>`;
  }

  data.forEach((obj) => {
    const html = `
      <div class="todo">
        <h3>${obj.text}</h3>
        <button data-id="${obj.id}">Delete</button>
      </div>
    `;

    todos_div.insertAdjacentHTML("beforeend", html);
  });
}

function getTodos() {
  fetch("/api/todos")
    .then((res) => res.json())
    .then((todos) => {
      outputToDos(todos);
    });
}

function addTodo(event) {
  const input = document.querySelector('input[name="somethin"]');
  const value = input.value;
  const data = {
    text: value,
  };

  event.preventDefault();

  fetch("/api/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((todos) => {
      outputToDos(todos);
      input.value = '';
    });
}

// JQuery shortcut of the above.
// $.post('/api/todos', data).then(res => console.log(res));

function deleteTodo(event) {
  const el = event.target;

  if (el.tagName === "BUTTON") {
    const id = el.dataset.id;
    const data = {
      id: parseInt(id),
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
      .then((todos) => outputToDos(todos));
  }
}

getTodos();
submit_btn.addEventListener("click", addTodo);
todos_div.addEventListener("click", deleteTodo);
