import { submit } from "./todoForm.js";

const todoArray = [];

const Todo = (title, description, dueDate, priority, notes, complete) => {
  return { title, description, dueDate, priority, notes, complete };
};

const newTodo = (event) => {
  event.preventDefault();
  let todo = Todo();
  todo.title = document.getElementById("title").value;
  todo.description = document.getElementById("description").value;
  todo.dueDate = document.getElementById("due-date").value;
  todo.priority = document.getElementById("priority").value;
  todo.notes = document.getElementById("notes").value;
  todo.complete = document.getElementById("complete").checked;
  todoArray.push(todo);
  console.log({ todoArray });
};

const createTodo = () => {
  submit.addEventListener("click", newTodo);
};

export { createTodo };
